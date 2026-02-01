"use client";

import { motion } from "motion/react";
import { CheckCircle2, Zap } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  reversed?: boolean;
  id?: string;
}

export function FeatureSection({ title, description, imageSrc, imageAlt, features, reversed = false, id }: FeatureProps) {
  return (
    <section id={id} className="py-20 md:py-32 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className={`absolute top-1/2 ${reversed ? "left-0" : "right-0"} -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20`}>
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>AI Powered</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {description}
            </p>

            {features.length > 0 && (
              <ul className="space-y-4 mb-10">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-500 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            <a
              href="https://www.virax.ai/image2video"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] cursor-pointer"
            >
              Try Now
            </a>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 aspect-video shadow-2xl">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay UI Mockup Elements */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2">
                    <div className="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-purple-500" />
                    </div>
                    <span className="text-xs text-gray-400 font-mono">Generating...</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
