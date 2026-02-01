"use client";

import { motion } from "motion/react";
import { Play, ChevronRight } from "lucide-react";

export function CelebrityPhotosSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#080808]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight whitespace-nowrap overflow-x-auto px-1"
          >
            Uncensored AI to Create Celebrity Photos With
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            <span className="block">The best free uncensored AI to create real celebrity photos with.</span>
            <span className="block">Generate high-fidelity, lifelike images without filters or restrictions.</span>
          </motion.p>
        </div>

        {/* 4 video showcase blocks - vertical Ins style (9:16), one row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-12 md:mb-16 max-w-2xl md:max-w-4xl mx-auto"
        >
          {[1, 2, 3, 4].map((i) => (
            <a
              key={i}
              href="https://www.virax.ai/image2video"
              className="group relative aspect-[9/16] rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 hover:border-purple-500/40 transition-colors cursor-pointer block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-gray-900" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-purple-600/80 flex items-center justify-center group-hover:bg-purple-500/90 transition-colors">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="https://www.virax.ai/image2video"
            className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_28px_rgba(168,85,247,0.5)] cursor-pointer text-base md:text-lg"
          >
            Try Uncensored AI with Celebrity Now
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
