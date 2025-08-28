'use client';

import { useEffect } from 'react';

export default function MouseGlowScript() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const body = document.body;
      body.style.setProperty('--mouse-x', `${e.clientX}px`);
      body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything, it just handles the side effect.
}
