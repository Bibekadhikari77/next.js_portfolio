"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

// Types
type Star = { id: number; x: number; y: number; size: number; delay: number; duration: number };
type Meteor = { id: number; startX: number; startY: number; length: number; speed: number; tilt: number; seed: number };
type Spark = { id: number; x: number; y: number };

export interface CosmicBackgroundProps {
  stars?: number;                 // star count
  meteors?: number;               // meteor pool size
  enableMeteors?: boolean;        // toggle meteors
  collisionIntervalMs?: number;   // how often to check for star "collisions"
  vignette?: boolean;             // show center radial vignette
  className?: string;             // extra wrapper classes
  starClass?: string;             // override star base class
  meteorClass?: string;           // override meteor gradient class
  sparkClass?: string;            // override spark class
}

function random(min: number, max: number) { return Math.random() * (max - min) + min; }

/**
 * Reusable cosmic background: stars, meteors, random collision sparks.
 * Optimized to keep element counts modest.
 */
export const CosmicBackground = ({
  stars = 60,
  meteors = 3,
  enableMeteors = true,
  collisionIntervalMs = 1800,
  vignette = false,
  className = "",
  starClass = "rounded-full bg-neutral-800/70 dark:bg-white/90",
  meteorClass = "h-px bg-gradient-to-r from-neutral-800/60 via-neutral-500/60 to-transparent dark:from-white dark:via-white",
  sparkClass = "rounded-full bg-white"
}: CosmicBackgroundProps) => {
  const [meteorState, setMeteorState] = useState<Meteor[]>([]);
  const [sparks, setSparks] = useState<Spark[]>([]);

  // Generate stars once
  const starField: Star[] = useMemo(() => (
    Array.from({ length: stars }).map((_, i) => ({
      id: i,
      x: random(0, 100),
      y: random(0, 100),
      size: random(0.6, 2.2),
      delay: random(0, 6),
      duration: random(2.5, 5.5)
    }))
  ), [stars]);

  // Meteors setup
  useEffect(() => {
    if (!enableMeteors || meteors <= 0) return;
    const spawnMeteor = (id: number): Meteor => ({
      id,
      startX: random(-20, 120),
      startY: random(-10, 30),
      length: random(120, 260),
      speed: random(4, 9),
      tilt: random(-25, 25),
      seed: Math.random()
    });
    setMeteorState(Array.from({ length: meteors }).map((_, i) => spawnMeteor(i)));
    const interval = setInterval(() => {
      setMeteorState(ms => {
        if (!ms.length) return ms;
        const idx = Math.floor(Math.random() * ms.length);
        const clone = [...ms];
        clone[idx] = spawnMeteor(ms[idx].id);
        return clone;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [enableMeteors, meteors]);

  // Random collision sparks
  useEffect(() => {
    const interval = setInterval(() => {
      const a = starField[Math.floor(Math.random() * starField.length)];
      const b = starField[Math.floor(Math.random() * starField.length)];
      if (!a || !b) return;
      const dx = a.x - b.x; const dy = a.y - b.y;
      if (Math.hypot(dx, dy) < 6) {
        setSparks(sp => [...sp, { id: Date.now() + Math.random(), x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }]);
      }
    }, collisionIntervalMs);
    return () => clearInterval(interval);
  }, [starField, collisionIntervalMs]);

  // Cleanup sparks
  useEffect(() => {
    if (!sparks.length) return;
    const timers = sparks.map(s => setTimeout(() => setSparks(sp => sp.filter(p => p.id !== s.id)), 900));
    return () => { timers.forEach(t => clearTimeout(t)); };
  }, [sparks]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden -z-10 ${className}`} aria-hidden="true">
      {/* Stars */}
      {starField.map(star => (
        <motion.span
          key={star.id}
          className={`absolute ${starClass}`}
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 6px 2px rgba(255,255,255,0.4)",
          }}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 1, 0.2, 0.8, 0.1] }}
          transition={{ repeat: Infinity, duration: star.duration, delay: star.delay, ease: "linear" }}
        />
      ))}

      {/* Meteors */}
      {enableMeteors && meteorState.map(m => (
        <motion.div
          key={m.id + '_' + m.seed}
          className={`absolute ${meteorClass}`}
          style={{
            top: `${m.startY}%`,
            left: `${m.startX}%`,
            width: m.length,
            transform: `rotate(${m.tilt}deg)`,
            filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.6))'
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], x: m.length * 0.6, y: m.length * 0.3 }}
          transition={{ duration: m.speed, ease: 'easeOut' }}
        />
      ))}

      {/* Collision Sparks */}
      {sparks.map(s => (
        <motion.span
          key={s.id}
          className={`absolute ${sparkClass}`}
          style={{
            top: `${s.y}%`,
            left: `${s.x}%`,
            width: 4,
            height: 4,
            boxShadow: '0 0 12px 4px rgba(255,255,255,0.8)'
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: [0, 1.4, 0.2], opacity: [1, 1, 0] }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      ))}

      {vignette && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55),rgba(255,255,255,0)_35%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),rgba(0,0,0,0.7))] mix-blend-overlay" />
      )}
    </div>
  );
};

export default CosmicBackground;
