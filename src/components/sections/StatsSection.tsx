import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Twitter } from 'lucide-react';
import mediumIcon from 'figma:asset/d460bd1df317eabbd5281ec7c2ce1f7163ad2fbd.png';

export function StatsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">See What They Say</h2>
            <p className="text-gray-400 max-w-2xl text-lg text-center mx-auto">
                Real feedback from developers, validators, and community members worldwide.
            </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
                name="Alex Chen"
                handle="@alexc_dev"
                content="Building on this network has been silky smooth. EVM compatibility means I migrated my dApp with zero cost, and the speed is amazing!"
                delay={0}
                avatarUrl="https://images.unsplash.com/photo-1758600432264-b8d2a0fd7d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGFzaWFuJTIwbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzY3NjY0MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <TestimonialCard 
                name="Sarah Jenkins"
                handle="@sarah_crypto"
                content="Since running a validator node, stability has been 100%. Community support is fantastic and yields are considerable."
                delay={0.1}
                avatarUrl="https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjBzbWlsaW5nfGVufDF8fHx8MTc2NzY2NDE2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <TestimonialCard 
                name="DeFi Degens DAO"
                handle="@degens_dao"
                content="Transaction confirmation is instant. This is the high-frequency trading infrastructure we've been looking for. Gas fees are negligible."
                delay={0.2}
                avatarUrl="https://images.unsplash.com/photo-1634133472760-e5c2bd346787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHRlY2glMjBkZXZlbG9wZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njc2NjQxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <TestimonialCard 
                name="Michael Ross"
                handle="@mross_validator"
                content="The setup process was very simple, documentation is clear. Exciting to see the network growth over the past few months!"
                delay={0.3}
                avatarUrl="https://images.unsplash.com/photo-1589220286904-3dcef62c68ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwbWFuJTIwd29tYW4lMjBkaXZlcnNlfGVufDF8fHx8MTc2NzY2NDE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <TestimonialCard 
                name="CryptoNinja"
                handle="@ninja_trader"
                content="Finally a Layer 1 that doesn't sacrifice decentralization for Web2 level speed. Bullish on the future of this project."
                delay={0.4}
                avatarUrl="https://images.unsplash.com/photo-1761429943531-49be6b2f8dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY3JlYXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njc2NjQxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
             <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#12E669] rounded-2xl p-8 flex flex-col justify-center items-center text-black text-center group cursor-pointer hover:bg-[#0fb854] transition-colors shadow-[0_0_20px_rgba(18,230,105,0.2)] hover:shadow-[0_0_40px_rgba(18,230,105,0.4)]"
            >
                <div className="mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <img src={mediumIcon} alt="Medium" className="w-32 h-32 object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Join MISwap</h3>
                <p className="font-medium opacity-80">Follow us on X for the latest updates</p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, handle, content, delay, featured, avatarUrl }: { name: string, handle: string, content: string, delay: number, featured?: boolean, avatarUrl: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        
        const rect = ref.current.getBoundingClientRect();
        
        const width = rect.width;
        const height = rect.height;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
                rotateX, 
                rotateY, 
                transformStyle: "preserve-3d" 
            }}
            className={`p-8 rounded-2xl border flex flex-col justify-between perspective-1000 ${featured ? 'bg-[#1A1A1A] border-[#12E669]/50 shadow-[0_0_30px_rgba(18,230,105,0.1)]' : 'bg-[#0A0A0A] border-white/10'}`}
        >
            <div style={{ transform: "translateZ(50px)" }} className="mb-6 pointer-events-none">
                <div className="flex items-center gap-3 mb-4">
                    <img 
                        src={avatarUrl} 
                        alt={name}
                        className={`w-12 h-12 rounded-full object-cover border-2 ${featured ? 'border-[#12E669]' : 'border-white/10'}`}
                    />
                    <div>
                        <div className="font-bold text-white">{name}</div>
                        <div className="text-sm text-gray-500">{handle}</div>
                    </div>
                    <Twitter className="w-5 h-5 text-gray-600 ml-auto" />
                </div>
                <p className={`${featured ? 'text-gray-200' : 'text-gray-400'} leading-relaxed`}>
                    "{content}"
                </p>
            </div>
            
            {/* Glossy overlay */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none transition-opacity duration-300" />
        </motion.div>
    )
}
