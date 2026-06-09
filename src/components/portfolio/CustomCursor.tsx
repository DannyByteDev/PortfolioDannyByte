'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const dotX = useSpring(0, { stiffness: 2000, damping: 50 });
  const dotY = useSpring(0, { stiffness: 2000, damping: 50 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX - 16);
    cursorY.set(e.clientY - 16);
    dotX.set(e.clientX - 4);
    dotY.set(e.clientY - 4);
    if (!isVisible) setIsVisible(true);
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(true);
        const text = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text') || '';
        setCursorText(text);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="w-full h-full rounded-full border-2 border-cyan-400 flex items-center justify-center">
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[10px] font-bold text-cyan-400"
            >
              {cursorText}
            </motion.span>
          )}
        </div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: dotX, y: dotY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
      </motion.div>

      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          width: isHovering ? 80 : 48,
          height: isHovering ? 80 : 48,
          opacity: isVisible ? 0.15 : 0,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        <div className="w-full h-full rounded-full bg-cyan-400/20 blur-md" />
      </motion.div>
    </>
  );
}
