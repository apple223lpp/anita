import React from 'react';
import { motion } from 'motion/react';

export function EcosystemSection() {
  const logos = [
    { bg: 'bg-blue-500' }, { bg: 'bg-green-500' }, { bg: 'bg-purple-500' },
    { bg: 'bg-orange-500' }, { bg: 'bg-white', center: true }, { bg: 'bg-pink-500' },
    { bg: 'bg-teal-500' }, { bg: 'bg-yellow-500' }, { bg: 'bg-red-500' }
  ];

  return (
    <section className="py-32 px-6">
       <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Vibrant Ecosystem</h2>
            <p className="text-gray-400 mb-12">
               Taraxa supercharges DeFi and Social AI ecosystems.
            </p>
            <div className="flex justify-center gap-4 mb-20">
               <button className="bg-[#12E669] text-black px-6 py-2 rounded font-bold text-sm">Explore DeFi</button>
               <button className="bg-white text-black px-6 py-2 rounded font-bold text-sm">Explore Social AI</button>
            </div>
          </motion.div>

          {/* Grid of logos */}
          <div className="relative w-full max-w-md mx-auto aspect-square">
             {/* Grid Lines */}
             <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 divide-x divide-y divide-white/10 border border-white/10 rounded-xl overflow-hidden">
                {[...Array(9)].map((_, i) => <div key={i} className="bg-transparent" />)}
             </div>

             {/* Logos */}
             <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 p-4 gap-4">
                {logos.map((logo, i) => (
                   <div key={i} className="flex items-center justify-center">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${logo.center ? 'bg-[#12E669] shadow-[0_0_30px_#12E669]' : 'bg-[#1A1A1A] border border-white/10'}`}>
                         <div className={`w-6 h-6 rounded-full ${logo.bg}`} />
                      </div>
                   </div>
                ))}
             </div>
          </div>
          
          <div className="mt-32">
             <h2 className="text-4xl font-bold mb-4">Join the Network!</h2>
             <p className="text-gray-400">Help secure the network while earning a yield.</p>
          </div>
       </div>
    </section>
  );
}
