'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  { text: 'const DannyByte = () => {', indent: 0, color: '#c792ea' },
  { text: 'const stack = [', indent: 1, color: '#89ddff' },
  { text: '"React", "Next.js", "TypeScript",', indent: 2, color: '#c3e88d' },
  { text: '"Node.js", "Express", "MongoDB",', indent: 2, color: '#c3e88d' },
  { text: '"Python", "TailwindCSS"', indent: 2, color: '#c3e88d' },
  { text: '];', indent: 1, color: '#89ddff' },
  { text: '', indent: 0, color: '' },
  { text: 'return (', indent: 1, color: '#c792ea' },
  { text: '<Portfolio', indent: 2, color: '#f07178' },
  { text: 'passionate={true}', indent: 3, color: '#ffcb6b' },
  { text: 'creative={Infinity}', indent: 3, color: '#ffcb6b' },
  { text: 'coffee="always"', indent: 3, color: '#c3e88d' },
  { text: '/>', indent: 2, color: '#f07178' },
  { text: ');', indent: 1, color: '#89ddff' },
  { text: '};', indent: 0, color: '#c792ea' },
];

export default function CodeTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const isCompleteRef = useRef(false);

  const isComplete = visibleLines >= codeLines.length;

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => setVisibleLines(v => v + 1), 120);
      return () => clearTimeout(timer);
    } else {
      isCompleteRef.current = true;
    }
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl shadow-cyan-500/5 max-w-md w-full"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-gray-500 font-mono">DannyByte.tsx</span>
      </div>
      {/* Code content */}
      <div className="p-4 font-mono text-xs sm:text-sm leading-relaxed overflow-hidden">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className="flex"
          >
            <span className="text-gray-600 w-6 text-right mr-4 select-none">{i + 1}</span>
            <span style={{ color: line.color, paddingLeft: `${line.indent * 16}px` }}>
              {line.text || '\u00A0'}
            </span>
          </motion.div>
        ))}
        {/* Cursor */}
        {!isComplete && (
          <div className="flex">
            <span className="text-gray-600 w-6 text-right mr-4 select-none">{visibleLines + 1}</span>
            <span className="cursor-blink border-r-2 border-cyan-400">&nbsp;</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
