import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import logoImg from 'figma:asset/d460bd1df317eabbd5281ec7c2ce1f7163ad2fbd.png';

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 group cursor-pointer"
            >
            <img src={logoImg} alt="MISwap" className="h-8 w-auto" />

            </motion.div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
            {['Swap', 'Partner Portal', 'Docs', 'FAQ'].map((link, i) => (
                <motion.a 
                    key={link} 
                    href="#"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="relative text-sm font-bold text-gray-300 hover:text-[#12E669] transition-colors group"
                >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#12E669] transition-all duration-300 group-hover:w-full" />
                </motion.a>
            ))}
            </div>

            {/* CTA */}


            {/* Mobile Menu */}
            <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
            </button>
        </div>
        
        {/* Progress Bar */}
        <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#12E669] origin-left"
            style={{ scaleX }}
        />
        </nav>
    </>
  );
}
