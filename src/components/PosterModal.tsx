import { useEffect, useRef, useCallback } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';
import { X } from 'lucide-react';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title?: string;
}

export default function PosterModal({ isOpen, onClose, src, alt, title }: PosterModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);

  const springCfg = { stiffness: 110, damping: 18, mass: 0.9 };
  const smoothX = useSpring(rawX, springCfg);
  const smoothY = useSpring(rawY, springCfg);

  const rotateX = useTransform(smoothY, [0, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [0, 1], [-10, 10]);

  const glareX = useTransform(smoothX, [0, 1], ['0%', '100%']);
  const glareY = useTransform(smoothY, [0, 1], ['0%', '100%']);
  const glareStyle = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 38%, transparent 62%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const r = cardRef.current.getBoundingClientRect();
      rawX.set((e.clientX - r.left) / r.width);
      rawY.set((e.clientY - r.top) / r.height);
    },
    [rawX, rawY],
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0.5);
    rawY.set(0.5);
  }, [rawX, rawY]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              background: 'rgba(3, 5, 18, 0.94)',
              backdropFilter: 'blur(36px) saturate(1.5)',
              WebkitBackdropFilter: 'blur(36px) saturate(1.5)',
            }}
            onClick={onClose}
          />

          {/* Radial vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 62% 52% at 50% 50%, transparent 0%, rgba(3,5,18,0.6) 100%)',
            }}
          />

          {/* One-shot entry sweep line */}
          <motion.div
            className="absolute left-0 right-0 h-px pointer-events-none z-10"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(109,40,217,0) 8%, rgba(167,139,250,0.7) 38%, rgba(216,180,254,0.95) 50%, rgba(167,139,250,0.7) 62%, rgba(109,40,217,0) 92%, transparent 100%)',
              boxShadow:
                '0 0 18px 3px rgba(139,92,246,0.55), 0 0 50px 10px rgba(109,40,217,0.22)',
            }}
            initial={{ top: '0%', opacity: 0 }}
            animate={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.05,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.06,
              times: [0, 0.06, 0.88, 1],
            }}
          />

          {/* Ambient rings */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 620,
                height: 620,
                border: '1px solid rgba(124,58,237,0.07)',
                boxShadow: '0 0 60px rgba(124,58,237,0.06) inset',
              }}
              animate={{ scale: [0.96, 1.03, 0.96], opacity: [0.45, 0.85, 0.45] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 430,
                height: 430,
                border: '1px solid rgba(139,92,246,0.09)',
              }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.55, 1, 0.55] }}
              transition={{ repeat: Infinity, duration: 3.9, ease: 'easeInOut', delay: 0.8 }}
            />
            <motion.div
              className="absolute w-[290px] h-[290px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
              }}
              animate={{ scale: [0.88, 1.1, 0.88], opacity: [0.5, 0.95, 0.5] }}
              transition={{ repeat: Infinity, duration: 3.3, ease: 'easeInOut', delay: 0.35 }}
            />
          </motion.div>

          {/* Screen-corner bracket accents */}
          {(
            [
              ['top-5 left-5', 'top-0 left-0'],
              ['top-5 right-5', 'top-0 right-0'],
              ['bottom-5 left-5', 'bottom-0 left-0'],
              ['bottom-5 right-5', 'bottom-0 right-0'],
            ] as const
          ).map(([pos, anchor], i) => {
            const isRight = anchor.includes('right');
            const isBottom = anchor.includes('bottom');
            return (
              <motion.div
                key={i}
                className={`absolute ${pos} w-5 h-5 pointer-events-none`}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 0.28, scale: 1 }}
                exit={{ opacity: 0, scale: 0.3 }}
                transition={{ duration: 0.32, delay: 0.28 + i * 0.04, ease: 'easeOut' }}
              >
                <div
                  className="absolute w-3 h-px bg-violet-400"
                  style={{
                    top: isBottom ? 'auto' : 0,
                    bottom: isBottom ? 0 : 'auto',
                    left: isRight ? 'auto' : 0,
                    right: isRight ? 0 : 'auto',
                  }}
                />
                <div
                  className="absolute w-px h-3 bg-violet-400"
                  style={{
                    top: isBottom ? 'auto' : 0,
                    bottom: isBottom ? 0 : 'auto',
                    left: isRight ? 'auto' : 0,
                    right: isRight ? 0 : 'auto',
                  }}
                />
              </motion.div>
            );
          })}

          {/* ESC dismiss hint */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 pointer-events-none z-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.38, delay: 0.7, ease: 'easeOut' }}
          >
            <kbd className="text-[8px] font-mono tracking-[0.18em] text-slate-500 border border-slate-700/70 rounded px-1.5 py-0.5">
              ESC
            </kbd>
            <span className="text-[8px] font-mono uppercase tracking-[0.22em] text-slate-700">
              dismiss
            </span>
          </motion.div>

          {/* Modal panel */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.78, y: 80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.91,
              y: 24,
              transition: { duration: 0.22, ease: [0.4, 0, 0.6, 1] },
            }}
            transition={{
              type: 'spring',
              stiffness: 295,
              damping: 27,
              mass: 0.88,
              delay: 0.05,
            }}
          >
            {/* Close button — enters with reverse rotation */}
            <motion.button
              onClick={onClose}
              className="absolute -top-4 -right-4 z-20 w-10 h-10 rounded-full bg-[#090916] border border-white/10 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              initial={{ opacity: 0, scale: 0.35, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.35 }}
              transition={{ type: 'spring', stiffness: 430, damping: 22, delay: 0.42 }}
              whileHover={{
                scale: 1.18,
                rotate: 90,
                borderColor: 'rgba(124,58,237,0.55)',
                backgroundColor: 'rgba(124,58,237,0.12)',
              }}
              whileTap={{ scale: 0.82 }}
              aria-label="Close modal"
            >
              <X className="w-[13px] h-[13px] text-white/45" />
            </motion.button>

            {/* Perspective wrapper */}
            <div style={{ perspective: '900px' }}>
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative cursor-default select-none"
              >
                {/* Layered drop shadow */}
                <div
                  className="absolute -bottom-7 left-1/2 -translate-x-1/2 pointer-events-none z-0"
                  style={{
                    width: '78%',
                    height: 56,
                    borderRadius: '50%',
                    background: 'rgba(109,40,217,0.62)',
                    filter: 'blur(34px)',
                  }}
                />
                <div
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 pointer-events-none z-0"
                  style={{
                    width: '48%',
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(139,92,246,0.38)',
                    filter: 'blur(22px)',
                  }}
                />

                {/* Card */}
                <div
                  className="relative z-10 overflow-hidden"
                  style={{
                    borderRadius: '18px',
                    boxShadow:
                      '0 50px 120px rgba(109,40,217,0.5), 0 24px 48px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.09)',
                  }}
                >
                  {/* Gradient border frame */}
                  <div
                    className="absolute -inset-px pointer-events-none z-30"
                    style={{
                      borderRadius: '18px',
                      background:
                        'linear-gradient(135deg, rgba(167,139,250,0.35) 0%, rgba(139,92,246,0.1) 28%, transparent 52%, rgba(109,40,217,0.12) 78%, rgba(167,139,250,0.22) 100%)',
                    }}
                  />

                  {/* Card corner bracket decorations */}
                  {/* Top-left */}
                  <motion.div
                    className="absolute top-3 left-3 w-5 h-5 pointer-events-none z-30"
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 0.55, scale: 1 }}
                    transition={{ duration: 0.28, delay: 0.52, ease: 'easeOut' }}
                  >
                    <div className="absolute top-0 left-0 w-4 h-px bg-white/30" />
                    <div className="absolute top-0 left-0 w-px h-4 bg-white/30" />
                  </motion.div>
                  {/* Top-right */}
                  <motion.div
                    className="absolute top-3 right-3 w-5 h-5 pointer-events-none z-30"
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 0.55, scale: 1 }}
                    transition={{ duration: 0.28, delay: 0.56, ease: 'easeOut' }}
                  >
                    <div className="absolute top-0 right-0 w-4 h-px bg-white/30" />
                    <div className="absolute top-0 right-0 w-px h-4 bg-white/30" />
                  </motion.div>
                  {/* Bottom-left */}
                  <motion.div
                    className="absolute bottom-3 left-3 w-5 h-5 pointer-events-none z-30"
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 0.55, scale: 1 }}
                    transition={{ duration: 0.28, delay: 0.6, ease: 'easeOut' }}
                  >
                    <div className="absolute bottom-0 left-0 w-4 h-px bg-white/30" />
                    <div className="absolute bottom-0 left-0 w-px h-4 bg-white/30" />
                  </motion.div>
                  {/* Bottom-right */}
                  <motion.div
                    className="absolute bottom-3 right-3 w-5 h-5 pointer-events-none z-30"
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 0.55, scale: 1 }}
                    transition={{ duration: 0.28, delay: 0.64, ease: 'easeOut' }}
                  >
                    <div className="absolute bottom-0 right-0 w-4 h-px bg-white/30" />
                    <div className="absolute bottom-0 right-0 w-px h-4 bg-white/30" />
                  </motion.div>

                  {/* Image — revealed via clip-path wipe */}
                  <motion.div
                    initial={{ clipPath: 'inset(0 0 100% 0)' }}
                    animate={{ clipPath: 'inset(0 0 0% 0)' }}
                    transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="block"
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: 'min(500px, 88vw)',
                        maxHeight: '80vh',
                        display: 'block',
                      }}
                      draggable={false}
                    />
                  </motion.div>

                  {/* Subtle scanline texture over image */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.025) 3px, rgba(0,0,0,0.025) 4px)',
                    }}
                  />

                  {/* Mouse-tracking glare */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none z-20"
                    style={{
                      background: glareStyle,
                      mixBlendMode: 'overlay',
                      borderRadius: '18px',
                    }}
                  />

                  {/* Bottom gradient fade */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(3,5,18,0.92) 0%, rgba(3,5,18,0.55) 50%, transparent 100%)',
                    }}
                  />

                  {/* Caption strip */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 px-5 py-4 z-30 flex items-end justify-between"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.38, delay: 0.62, ease: 'easeOut' }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-px h-7 flex-shrink-0"
                        style={{
                          background:
                            'linear-gradient(to bottom, rgba(167,139,250,0.85), transparent)',
                        }}
                      />
                      <div>
                        <p className="text-[7.5px] font-mono uppercase tracking-[0.38em] text-violet-400/65 leading-none mb-1">
                          OrchestriX
                        </p>
                        {title && (
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/88 leading-none">
                            {title}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="font-mono text-[7.5px] tracking-[0.28em] uppercase text-slate-600">
                      ORX // 2026
                    </span>
                  </motion.div>

                  {/* Top edge specular highlight */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px pointer-events-none z-20"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.45) 28%, rgba(216,180,254,0.55) 50%, rgba(167,139,250,0.45) 72%, transparent 100%)',
                    }}
                  />

                  {/* Bottom ambient edge glow */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none z-30"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent 0%, rgba(109,40,217,0.5) 35%, rgba(139,92,246,0.65) 50%, rgba(109,40,217,0.5) 65%, transparent 100%)',
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
