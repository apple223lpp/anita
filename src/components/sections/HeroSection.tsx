import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'motion/react';
import { FaceUniverse } from '../ui/FaceUniverse';
import { RippleGrid } from '../ui/RippleGrid';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Background Gradients */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#12E669]/10 rounded-full blur-[120px] -z-20" 
      />
      
      {/* Interactive Face Universe */}
      <div className="absolute inset-0 -z-30">
        <FaceUniverse />
      </div>

      {/* Ripple Grid */}
      <div className="absolute inset-0 z-[-29] overflow-hidden">
        <RippleGrid
            enableRainbow={false}
            gridColor="#ffffff"
            rippleIntensity={0.05}
            gridSize={50} // 调整为更合理的值
            gridThickness={1} // 调整为更合理的值
            mouseInteraction={true}
            mouseInteractionRadius={1.2}
            opacity={0.8}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/0 via-[#050505]/50 to-[#050505] -z-10 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="overflow-hidden mb-8">
                <motion.h1 
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]"
                >
                    <span className="block mb-2">A Fully Integrated Universal</span>
                    <span className="block mb-4">Exchange Aggregator</span>
                    <GlitchText text="with Enhanced Security & Compatibility" />
                </motion.h1>
            </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            A secure, highly compatible decentralized exchange aggregator. Real-time price aggregation across multiple channels ensures the lowest fees and best rates. Non-custodial and secured by multi-layer encryption.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <MagneticButton>
                <button className="relative overflow-hidden group bg-[#65FF84] text-black px-16 py-4 rounded-full font-bold text-lg hover:bg-[#52cc6a] transition-all inline-flex items-center gap-2 shadow-[0_0_20px_rgba(101,255,132,0.4)] hover:shadow-[0_0_40px_rgba(101,255,132,0.6)]">
                    <span className="relative z-10">Start Trading</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
            </MagneticButton>
          </motion.div>

          <LogoTicker />
        </motion.div>
      </div>


    </section>
  );
}

function GlitchText({ text }: { text: string }) {
    return (
        <span className="text-[#12E669] inline-block relative group">
            <span className="absolute inset-0 translate-x-[2px] text-red-500 opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-opacity select-none" aria-hidden="true">
                {text}
            </span>
            <span className="absolute inset-0 -translate-x-[2px] text-blue-500 opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-opacity select-none" aria-hidden="true">
                {text}
            </span>
            <span className="relative z-10">{text}</span>
        </span>
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



function LogoTicker() {
    const chains = [
      { name: "BNB Smart Chain", logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=029" },
      { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029" },
      { name: "Polygon", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=029" },
      { name: "Arbitrum One", logo: "https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=029" },
      { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=029" },
      { name: "BTC Mainnet", logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029" },
      { name: "TRON", logo: "https://cryptologos.cc/logos/tron-trx-logo.png?v=029" },
      { name: "Avalanche C-Chain", logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=029" }
    ];
    
    return (
      <div className="mt-24 w-full overflow-hidden relative select-none">
        <motion.div 
          className="flex gap-3 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            ease: "linear", 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: "paused" }} 
        >
          {[...chains, ...chains].map((chain, index) => (
            <div 
                key={index} 
                className="group relative flex-shrink-0 w-[212px] h-[148px] flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#0A0A0A] border border-white/5 overflow-hidden transition-colors duration-300 cursor-default hover:border-[#12E669]"
            >
               {/* Hover Effect Background */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#12E669] rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out origin-center" />
               
               {/* Content */}
               <div className="relative z-10 flex flex-col items-center gap-4">
                 <div className="w-10 h-10 relative flex items-center justify-center">
                   <img 
                      src={chain.logo} 
                      alt={chain.name} 
                      className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:brightness-0 transition-all duration-300" 
                   />
                 </div>
                 <span className="text-gray-400 font-bold text-xs uppercase tracking-wide group-hover:text-black transition-colors text-center px-2">
                   {chain.name}
                 </span>
               </div>
            </div>
          ))}
        </motion.div>
         <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
         <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      </div>
    )
}

function FloatingElement({ children, x, y, delay }: { children: React.ReactNode, x: number, y: number, delay: number }) {
    return (
        <motion.div
            className="absolute hidden xl:block z-10"
            initial={{ x, y }}
            animate={{ 
                y: [y, y - 20, y],
            }}
            transition={{
                duration: 4,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    )
}
