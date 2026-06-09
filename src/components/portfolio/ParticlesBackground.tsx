'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

function ParticlesContent() {
  const options: ISourceOptions = {
    fullScreen: false,
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: true, mode: 'push' } },
      modes: { grab: { distance: 140, links: { opacity: 0.5 } }, push: { quantity: 2 } },
    },
    particles: {
      color: { value: '#00eeff' },
      links: { color: '#00eeff', distance: 150, enable: true, opacity: 0.15, width: 1 },
      move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: false, speed: 0.8, straight: false },
      number: { density: { enable: true }, value: 60 },
      opacity: { value: 0.3 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };
  return <Particles id="tsparticles" options={options} className="absolute inset-0 z-0" />;
}

export default function ParticlesBackground() {
  const init = useCallback(async (engine: Engine) => { await loadSlim(engine); }, []);
  return <ParticlesProvider init={init}><ParticlesContent /></ParticlesProvider>;
}
