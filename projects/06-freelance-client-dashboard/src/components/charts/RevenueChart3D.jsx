import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const RevenueChart3D = ({ data }) => {
  const mountRef = useRef(null);
  const tooltipRef = useRef(null);
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    if (!mountRef.current || !data || data.length === 0) return;

    const container = mountRef.current;
    let animationFrameId;

    // 1. Dimensions
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 260;

    // 2. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 11, 24);
    camera.lookAt(0, 3.5, 0);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.85);
    dirLight.position.set(12, 20, 15);
    scene.add(dirLight);

    const violetLight = new THREE.PointLight(0xa855f7, 1.2, 35);
    violetLight.position.set(-14, 8, 10);
    scene.add(violetLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 1.8, 30);
    pointLight.position.set(0, 8, 12);
    scene.add(pointLight);

    // 5. Grid Floor
    const grid = new THREE.GridHelper(32, 20, 0x6366f1, 0x242842);
    grid.position.y = -0.05;
    scene.add(grid);

    // 6. Bars & Labels Groups
    const barsGroup = new THREE.Group();
    scene.add(barsGroup);

    const labelsGroup = new THREE.Group();
    scene.add(labelsGroup);

    // 7. Data Setup
    const count = data.length;
    const maxAmount = Math.max(...data.map(d => d.amount)) * 1.15;
    const maxHeight = 7.5;
    const spacing = count > 6 ? 1.9 : 3.4;
    const startX = -((count - 1) * spacing) / 2;
    const radius = count > 6 ? 0.65 : 0.95;

    const createLabelSprite = (text) => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 26px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 64, 32);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(2.4, 1.2, 1);
      return sprite;
    };

    data.forEach((item, index) => {
      const targetH = (item.amount / maxAmount) * maxHeight;
      const x = startX + index * spacing;

      // Bar Mesh
      const geom = new THREE.CylinderGeometry(radius, radius, 1, 24);
      geom.translate(0, 0.5, 0);

      const mat = new THREE.MeshStandardMaterial({
        color: 0x6366f1,
        roughness: 0.22,
        metalness: 0.18,
        emissive: 0x312e81,
        emissiveIntensity: 0.4
      });

      const barMesh = new THREE.Mesh(geom, mat);
      barMesh.position.set(x, 0, 0);
      barMesh.scale.set(1, 0.05, 1);
      barMesh.userData = {
        targetHeight: targetH,
        data: item,
        baseRadius: radius,
        index: index
      };

      // Top Neon Cap
      const capGeom = new THREE.CylinderGeometry(radius * 1.08, radius * 1.08, 0.16, 24);
      const capMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const capMesh = new THREE.Mesh(capGeom, capMat);
      capMesh.position.y = 1;
      barMesh.add(capMesh);

      // Floor Ring
      const ringGeom = new THREE.RingGeometry(radius * 1.05, radius * 1.35, 24);
      ringGeom.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x6366f1,
        transparent: true,
        opacity: 0.45,
        side: THREE.DoubleSide
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.position.set(x, 0.02, 0);
      barsGroup.add(ringMesh);

      // Month Label Sprite
      const sprite = createLabelSprite(item.month);
      sprite.position.set(x, 0.6, 2.8);
      labelsGroup.add(sprite);

      barsGroup.add(barMesh);
    });

    // 8. Interaction State
    const mouse = new THREE.Vector2(-999, -999);
    const raycaster = new THREE.Raycaster();
    let targetRotX = 0;
    let targetRotY = 0;
    let hoveredBar = null;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.x = x;
      mouse.y = y;

      targetRotY = x * 0.22;
      targetRotX = -y * 0.12;

      pointLight.position.x = x * 14;
      pointLight.position.y = 8 + y * 4;
    };

    const handleMouseLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
      targetRotX = 0;
      targetRotY = 0;
      setActiveTooltip(null);
      if (hoveredBar) {
        resetBar(hoveredBar);
        hoveredBar = null;
      }
    };

    const resetBar = (bar) => {
      bar.scale.x = 1;
      bar.scale.z = 1;
      bar.material.color.setHex(0x6366f1);
      bar.material.emissive.setHex(0x312e81);
      bar.material.emissiveIntensity = 0.4;
    };

    const highlightBar = (bar) => {
      bar.scale.x = 1.15;
      bar.scale.z = 1.15;
      bar.material.color.setHex(0x818cf8);
      bar.material.emissive.setHex(0xa855f7);
      bar.material.emissiveIntensity = 0.9;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize Handler
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW === 0 || newH === 0) return;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    });
    resizeObserver.observe(container);

    // 9. Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Gyro Tilt
      scene.rotation.y += (targetRotY - scene.rotation.y) * 0.06;
      scene.rotation.x += (targetRotX - scene.rotation.x) * 0.06;

      // Bar Height Interpolation
      barsGroup.children.forEach((child) => {
        if (child.userData && child.userData.targetHeight !== undefined) {
          child.scale.y += (child.userData.targetHeight - child.scale.y) * 0.12;
        }
      });

      // Raycast
      if (mouse.x !== -999) {
        raycaster.setFromCamera(mouse, camera);
        const candidates = barsGroup.children.filter(
          (c) => c.userData && c.userData.targetHeight !== undefined
        );
        const intersects = raycaster.intersectObjects(candidates);

        if (intersects.length > 0) {
          const hit = intersects[0].object;
          if (hoveredBar !== hit) {
            if (hoveredBar) resetBar(hoveredBar);
            hoveredBar = hit;
            highlightBar(hoveredBar);
          }

          // Project position to screen for 2D Tooltip
          const vector = new THREE.Vector3();
          hit.getWorldPosition(vector);
          vector.y += hit.scale.y + 0.8;
          vector.project(camera);

          const screenX = (vector.x * 0.5 + 0.5) * container.clientWidth;
          const screenY = (-(vector.y * 0.5) + 0.5) * container.clientHeight;

          setActiveTooltip({
            x: screenX,
            y: screenY,
            data: hit.userData.data
          });
        } else {
          if (hoveredBar) {
            resetBar(hoveredBar);
            hoveredBar = null;
          }
          setActiveTooltip(null);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      renderer.dispose();
      container.innerHTML = '';
    };
  }, [data]);

  return (
    <div className="relative w-full h-[260px] min-h-[260px] overflow-hidden rounded-xl">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating 3D Tooltip */}
      {activeTooltip && (
        <div
          ref={tooltipRef}
          style={{
            left: `${activeTooltip.x}px`,
            top: `${activeTooltip.y}px`,
            transform: 'translate(-50%, -100%)'
          }}
          className="absolute z-20 pointer-events-none p-3 rounded-xl bg-[#131622]/95 border border-white/20 shadow-2xl backdrop-blur-xl animate-fade-in"
        >
          <div className="text-[11px] font-bold text-sky-400">{activeTooltip.data.month} 2026</div>
          <div className="text-sm font-extrabold text-white my-0.5">
            ${activeTooltip.data.amount.toLocaleString()} USD
          </div>
          <div className="text-[10px] font-semibold text-emerald-400">✦ Billed Freelance Deliverable</div>
        </div>
      )}
    </div>
  );
};
