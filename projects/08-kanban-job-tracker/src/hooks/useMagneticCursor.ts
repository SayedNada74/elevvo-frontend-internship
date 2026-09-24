import { useEffect } from 'react';

export const useMagneticCursor = () => {
  useEffect(() => {
    // Check if pointer is coarse (touch devices)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const ring = document.getElementById('custom-cursor-ring');
    const dot = document.getElementById('custom-cursor-dot');

    if (!ring || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHoveringInteractive = false;
    let isMouseDown = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      // Check if target is interactive
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('[draggable="true"]') ||
          target.closest('.interactive-target'))
      ) {
        isHoveringInteractive = true;
      } else {
        isHoveringInteractive = false;
      }
    };

    const onMouseDown = () => {
      isMouseDown = true;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    const onMouseLeave = () => {
      ring.style.opacity = '0';
      dot.style.opacity = '0';
    };

    const onMouseEnter = () => {
      ring.style.opacity = '1';
      dot.style.opacity = '1';
    };

    // Smooth Lerp loop for ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      let scale = 1;
      if (isMouseDown) {
        scale = 0.75;
      } else if (isHoveringInteractive) {
        scale = 1.45;
      }

      ring.style.transform = `translate(-50%, -50%) scale(${scale})`;

      if (isHoveringInteractive) {
        ring.classList.add('border-cyan-400', 'bg-cyan-500/10');
      } else {
        ring.classList.remove('border-cyan-400', 'bg-cyan-500/10');
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);
};
