import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';

export function ApiIntegrationSection() {
  return (
    <section className="py-24 px-6 bg-[#050505] relative z-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#12E669]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#12E669]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Integrator API Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            As a developer-friendly platform, we provide comprehensive API integration solutions to help DApps, exchanges, and DeFi projects quickly integrate our aggregator services. Whether you are building a new application or optimizing an existing product, our API can enhance your trading efficiency and user experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<TriangleSecurityIcon />}
            title="High Performance & Security"
            description="Our API supports thousands of calls per second, equipped with DDoS protection and API key management. All data transmission uses HTTPS and OAuth 2.0 authentication."
            delay={0}
          />
          <FeatureCard 
            icon={<RingsLiquidityIcon />}
            title="Revenue Sharing"
            description="Integrate our aggregator and enjoy a transaction fee sharing model to help your project achieve sustainable growth."
            delay={0.1}
          />
          <FeatureCard 
            icon={<ServerDocsIcon />}
            title="Documentation & Support"
            description="Detailed API documentation, code samples, and 24/7 technical support ensure a smooth integration process. Hundreds of integrators have successfully launched in just 1 week on average."
            delay={0.2}
          />
        </div>

      </div>
    </section>
  );
}

function TriangleSecurityIcon() {
    return (
        <svg viewBox="0 0 40 40" fill="none" className="w-16 h-16 overflow-visible">
            <motion.path 
                d="M20 34L6 10H34L20 34Z" 
                stroke="#12E669" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                variants={{
                    hover: { 
                        y: [0, -3, 0],
                        transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
                    }
                }}
            />
            <motion.path 
                d="M20 6L32 28H8L20 6Z" 
                fill="white"
                variants={{
                    hover: { 
                        y: [0, 3, 0],
                        transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
                    }
                }}
            />
        </svg>
    );
}

function RingsLiquidityIcon() {
    return (
        <svg viewBox="0 0 40 40" fill="none" className="w-16 h-16">
            {[10, 17, 24, 31].map((cy, i) => (
                <motion.ellipse 
                    key={i}
                    cx="20" 
                    cy={cy} 
                    rx="16" 
                    ry="4" 
                    stroke={i === 2 ? "#12E669" : "currentColor"} 
                    className={i === 2 ? "" : "text-gray-500"} 
                    strokeWidth="1.5"
                    variants={{
                        hover: { 
                            y: [0, -2, 0],
                            opacity: [0.5, 1, 0.5],
                            transition: { 
                                duration: 1.5, 
                                repeat: Infinity, 
                                delay: i * 0.1,
                                ease: "easeInOut"
                            }
                        }
                    }}
                />
            ))}
        </svg>
    );
}

function ServerDocsIcon() {
    return (
        <svg viewBox="0 0 40 40" fill="none" className="w-16 h-16">
            <rect x="8" y="4" width="24" height="32" rx="6" stroke="currentColor" className="text-gray-500" strokeWidth="1.5" />
            <motion.rect 
                x="12" y="10" height="5" rx="2.5" fill="#12E669" 
                width="16"
                variants={{
                    hover: { 
                        width: [16, 8, 16],
                        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }
                }}
            />
            <motion.rect 
                x="12" y="18" height="5" rx="2.5" fill="#12E669" 
                width="12"
                variants={{
                    hover: { 
                        width: [12, 6, 12],
                        transition: { duration: 1.5, repeat: Infinity, delay: 0.2, ease: "easeInOut" }
                    }
                }}
            />
            <motion.rect 
                x="12" y="26" height="5" rx="2.5" stroke="currentColor" className="text-gray-500" strokeWidth="1.5" 
                width="16"
                variants={{
                    hover: { 
                        width: [16, 8, 16],
                        transition: { duration: 1.5, repeat: Infinity, delay: 0.4, ease: "easeInOut" }
                    }
                }}
            />
        </svg>
    );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
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
            whileHover="hover"
            transition={{ delay }}
            className="group relative border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] p-8 rounded-2xl overflow-hidden transition-colors"
            onMouseMove={handleMouseMove}
        >
             <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(18, 230, 105, 0.1),
                            transparent 80%
                        )
                    `,
                }}
            />
            
            <div className="relative z-10">
                <div className="flex items-center justify-start mb-6 text-[#12E669] group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#12E669] transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}