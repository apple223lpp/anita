import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function DeveloperCtaSection() {
  return (
    <section className="py-32 px-6 bg-[#050505] relative z-10 overflow-hidden border-t border-white/5">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#12E669]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight"
            >
                Log in to our Developer Center,<br className="hidden md:block" />
                get your free API key and start integrating!
            </motion.h2>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
            >
                <MagneticButton>
                    <button className="relative overflow-hidden group bg-[#65FF84] text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-[#52cc6a] transition-all inline-flex items-center gap-2 shadow-[0_0_20px_rgba(101,255,132,0.4)] hover:shadow-[0_0_40px_rgba(101,255,132,0.6)]">
                        <span className="relative z-10">Start Building</span>
                        <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </MagneticButton>
            </motion.div>
        </div>
    </section>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { mass: 0.1, stiffness: 150, damping: 10 });
    const ySpring = useSpring(y, { mass: 0.1, stiffness: 150, damping: 10 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: xSpring, y: ySpring }}
        >
            {children}
        </motion.div>
    );
}
