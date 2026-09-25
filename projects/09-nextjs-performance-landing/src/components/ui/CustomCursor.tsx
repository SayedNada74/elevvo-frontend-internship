'use client';

import React from 'react';
import { useMagneticCursor } from '../../hooks/useMagneticCursor';

export const CustomCursor: React.FC = () => {
  useMagneticCursor();

  return (
    <>
      <div
        id="custom-cursor-ring"
        className="fixed pointer-events-none z-50 rounded-full border border-indigo-500/50 dark:border-indigo-400/60 w-9 h-9 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block"
        aria-hidden="true"
      />
      <div
        id="custom-cursor-dot"
        className="fixed pointer-events-none z-50 rounded-full bg-indigo-600 dark:bg-indigo-400 w-2 h-2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        aria-hidden="true"
      />
    </>
  );
};
