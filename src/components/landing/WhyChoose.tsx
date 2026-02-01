"use client";

import { motion } from "motion/react";
import { Shield, Unlock, Zap, Users, Globe, Lock } from "lucide-react";

const reasons = [
  {
    icon: Unlock,
    title: "No Content Filters",
    description: "Experience true freedom with our unfiltered AI models designed for creative exploration without boundaries.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your generations are private and encrypted. We don't store your prompts or results on our servers.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate high-quality images and videos in seconds using our optimized cloud GPU infrastructure.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join thousands of creators sharing their prompts, techniques, and uncensored creations.",
  },
  {
    icon: Globe,
    title: "Uncensored Chat",
    description: "Engage with AI characters that can discuss any topic freely, perfect for open-minded conversations.",
  },
  {
    icon: Lock,
    title: "Secure Access",
    description: "Enterprise-grade security ensures your account and data remain protected at all times.",
  },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-purple-500">Uncensored AI?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We provide the tools you need to express yourself fully, without the arbitrary limitations found in other platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl hover:bg-gray-800/80 transition-all hover:border-purple-500/30 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
