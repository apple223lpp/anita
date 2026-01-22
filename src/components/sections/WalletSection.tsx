import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

const wallets = [
  { 
    name: 'MetaMask', 
    type: 'Browser & Mobile',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M21.49 10.12l-1.02-3.32L17.38 1.1l-3.29 5.6-2.45-2.44-2.43 2.44-3.26-5.59-3.09 5.69-1.01 3.32-.97 10.1 11.64 7.29 11.69-7.29-.97-10.1zm-9.85 13.06l-7.49-4.66 1.88-7.53 2.38 4.07 3.23-3.21 3.23 3.21 2.35-4.05 1.91 7.51-7.49 4.66z"/>
      </svg>
    )
  },
  { 
    name: 'Coinbase', 
    type: 'Smart Wallet',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-3.35-6.48l1.55-1.57a5.132 5.132 0 010-7.9l-1.55-1.57a7.352 7.352 0 000 11.04z" />
      </svg>
    )
  },
  { 
    name: 'Trust', 
    type: 'Mobile',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2L2 6.5V12C2 17.5 6.5 22.5 12 24C17.5 22.5 22 17.5 22 12V6.5L12 2ZM12 4.5L19.5 7.8V12C19.5 16 16.5 19.5 12 21C7.5 19.5 4.5 16 4.5 12V7.8L12 4.5Z" />
      </svg>
    )
  },
  { 
    name: 'Phantom', 
    type: 'Solana & EVM',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12.08 2C7.38 2 4.08 5.6 4.08 10.8c0 3.8 2 7.7 5.2 9.4 0 0 .1.1.2 0 .2-.1.2-.4.1-.6-.5-.9-.7-1.8-.7-2.7 0-2.7 2-4.9 4.5-4.9s4.5 2.2 4.5 4.9c0 .7-.1 1.4-.4 2.1-.1.2-.1.5.1.6 0 0 .1 0 .2 0 3.2-1.7 5.2-5.6 5.2-9.4C22.88 5.5 18.48 2 12.08 2zm-1.8 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7.6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
      </svg>
    )
  },
  { 
    name: 'WalletConnect', 
    type: 'Protocol',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M6.3 8.35a10.02 10.02 0 0111.4 0l1.22-1.82a12.21 12.21 0 00-13.84 0L6.3 8.35zm5.7 10.5l5.8-5.8-1.55-1.55L12 15.8l-4.25-4.25-1.55 1.55 5.8 5.75z"/>
      </svg>
    )
  },
  { 
    name: 'Ledger', 
    type: 'Hardware',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M3 3h7.2v1.8H4.8v5.4H3V3zm18 0h-7.2v1.8h5.4v5.4H21V3zM3 21h7.2v-1.8H4.8v-5.4H3V21zm18 0h-7.2v-1.8h5.4v-5.4H21V21z"/>
      </svg>
    )
  },
];

export function WalletSection() {
  return (
    <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        {/* Linear Style Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#12E669]/10 rounded-[100%] blur-[100px] pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-medium tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
            >
                Supports <span className="text-[#12E669]">30+</span> Major Wallets
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed font-light"
            >
                To facilitate seamless transactions, we've integrated over 30 leading wallets, enabling one-click connectivity.
            </motion.p>
        </div>

        {/* Linear Style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {wallets.map((wallet, index) => (
                <SpotlightCard key={wallet.name} index={index}>
                    <div className="relative z-10 flex flex-col items-center gap-4 py-4">
                        <div className="text-white/40 group-hover:text-[#12E669] transition-colors duration-500">
                            {wallet.icon}
                        </div>
                        <div className="text-center">
                            <div className="font-medium text-white/90 text-sm">{wallet.name}</div>
                        </div>
                    </div>
                </SpotlightCard>
            ))}
        </div>
        

      </div>
    </section>
  );
}

function SpotlightCard({ children, index }: { children: React.ReactNode, index: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-white/[0.01] px-4 py-8 group"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(18, 230, 105, 0.1), transparent 40%)`,
        }}
      />
       <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(18, 230, 105, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
