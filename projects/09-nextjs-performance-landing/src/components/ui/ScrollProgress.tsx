'use client';

import React, { useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  useEffect(() => {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      id="scroll-progress-bar"
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 z-50 transition-all duration-75 w-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};
