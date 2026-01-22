import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { Zap, Shield, Coins, Globe, ArrowRight, Cpu, Network } from 'lucide-react';

export function BentoFeatures() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             The network designed for the real world. Unmatched speed, security, and scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* Card 1: Fast (Span 2) */}
          <SpotlightCard className="md:col-span-2 group">
             {/* Content */}
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                   <div className="w-14 h-14 rounded-full bg-[#12E669]/10 border border-[#12E669]/20 flex items-center justify-center mb-6 text-[#12E669] group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-7 h-7" />
                   </div>
                   <h3 className="text-3xl font-bold mb-3 group-hover:text-[#12E669] transition-colors">Aggregate optimal prices from multiple channels</h3>
                   <p className="text-gray-400 max-w-md text-lg group-hover:text-gray-300 transition-colors">Real-time multi-platform price aggregation, optimal rates selected by intelligent algorithms, cost savings and zero slippage for all trade sizes.</p>
                </div>

             </div>
             {/* Bg Animation */}
             <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none">
                <ShootingBeams />
             </div>
          </SpotlightCard>

          {/* Card 2: Low Fees (Span 1) */}
          <SpotlightCard className="group flex flex-col justify-between" delay={0.1}>
             <div>
                <div className="w-14 h-14 rounded-full bg-[#12E669]/10 border border-[#12E669]/20 flex items-center justify-center mb-6 text-[#12E669] group-hover:scale-110 transition-transform duration-300">
                   <Coins className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#12E669] transition-colors">Trading Security</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Execute complex smart contracts for a fraction of a cent. Ideal for high-frequency trading.</p>
             </div>
             <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden mt-6">
                 <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-[#12E669]" 
                 />
             </div>
             <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#12E669]/5 group-hover:to-[#12E669]/10 transition-colors pointer-events-none" />
          </SpotlightCard>

          {/* Card 3: Decentralized (Span 1) */}
          <SpotlightCard className="group flex flex-col justify-between" delay={0.2}>
             <div>
                <div className="w-14 h-14 rounded-full bg-[#12E669]/10 border border-[#12E669]/20 flex items-center justify-center mb-6 text-[#12E669] group-hover:scale-110 transition-transform duration-300">
                   <Network className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#12E669] transition-colors">Fund Security</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">You retain full control of your assets at all times. We do not custody funds, and all transactions are executed directly via smart contracts.</p>
             </div>
             {/* Node Animation */}
             <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-500">
                <Globe className="w-24 h-24 text-[#12E669] animate-spin-slow" />
             </div>
          </SpotlightCard>

          {/* Card 4: EVM (Span 2) */}
          <SpotlightCard className="md:col-span-2 group" delay={0.3}>
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                   <div className="w-14 h-14 rounded-full bg-[#12E669]/10 border border-[#12E669]/20 flex items-center justify-center mb-6 text-[#12E669] group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="w-7 h-7" />
                   </div>
                   <h3 className="text-3xl font-bold mb-3 group-hover:text-[#12E669] transition-colors">Fast Transactions</h3>
                   <p className="text-gray-400 max-w-lg text-lg group-hover:text-gray-300 transition-colors">Layer 2 & cross-chain bridge: seconds for confirmation, instant settlement, way faster than traditional platforms.</p>
                </div>
                
             </div>
             {/* Hex Grid Bg */}
             <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none">
                <HexGrid />
             </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
}

function SpotlightCard({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className={`bg-[#0A0A0A] border border-white/10 transition-colors rounded-3xl p-8 relative overflow-hidden group ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(18, 230, 105, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />
            
            {/* Border Beam Animation */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="absolute inset-0 w-full h-full">
                   <motion.rect 
                        x="1" y="1"
                        width="calc(100% - 2px)" 
                        height="calc(100% - 2px)" 
                        rx="23" 
                        ry="23" 
                        fill="none" 
                        stroke="#12E669"
                        strokeWidth="1.5"
                        pathLength="100"
                        strokeDasharray="30 70"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -100 }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                   />
                </svg>
            </div>

            {children}
        </motion.div>
    );
}

function ShootingBeams() {
  return (
    <div className="w-full h-full relative rotate-12">
      {[0, 1, 2, 3, 4].map((i) => {
        const isLeft = i < 2;
        return (
          <motion.div
            key={i}
            className="absolute bottom-0 w-16 bg-gradient-to-t from-[#12E669] to-transparent opacity-50"
            style={{
               left: `${(i) * 20}%`,
               height: '20%'
            }}
            animate={{
               height: isLeft ? ['10%', '40%', '10%'] : ['20%', '100%', '20%'],
               opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
               duration: 2 + i * 0.5,
               repeat: Infinity,
               ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
}

function HexGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 transform rotate-12 scale-125">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <motion.div
           key={i}
           className="w-20 h-20 border border-[#12E669] relative flex items-center justify-center backdrop-blur-sm"
           style={{
             clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
           }}
           animate={{
             scale: [1, 1.1, 1],
             borderColor: ['rgba(18,230,105,0.3)', 'rgba(255,255,255,0.8)', 'rgba(18,230,105,0.3)']
           }}
           transition={{
             duration: 4,
             delay: i * 0.3,
             repeat: Infinity
           }}
        >
           <div className="absolute inset-0 bg-[#12E669]/5" />
        </motion.div>
      ))}
    </div>
  );
}
