"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "jav amateurs 18-year-old ai fucks uncensored";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white pt-16" aria-label="Hero section">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Tech Bubbles - decorative only, no interaction */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-[12%] left-[6%] w-40 h-40 rounded-full bg-purple-500/25 blur-[50px]" />
        <div className="absolute top-[20%] right-[8%] w-56 h-56 rounded-full bg-purple-400/20 blur-[60px]" />
        <div className="absolute bottom-[18%] left-[10%] w-48 h-48 rounded-full bg-blue-500/22 blur-[55px]" />
        <div className="absolute bottom-[25%] right-[5%] w-44 h-44 rounded-full bg-purple-600/20 blur-[50px]" />
        <div className="absolute top-[42%] left-[3%] w-32 h-32 rounded-full bg-cyan-500/20 blur-[45px]" />
        <div className="absolute top-[58%] right-[4%] w-36 h-36 rounded-full bg-purple-400/18 blur-[48px]" />
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-purple-500/15 blur-[90px]" />
        <div className="absolute bottom-[35%] left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-blue-600/12 blur-[80px]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center gap-8 sm:gap-10 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-x-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight whitespace-nowrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              Uncensored AI
            </span>{" "}
            <span className="text-white">Video Generator</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          <span className="block">Break the limits of creativity. No filters, no restrictions, just pure imagination.</span>
          <span className="block">Experience absolute freedom in content creation.</span>
        </motion.p>

        {/* Terminal Window Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-3xl mx-auto flex-shrink-0 bg-black/80 border border-gray-800 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm"
        >
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-2 bg-gray-900/50 border-b border-gray-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center text-xs font-mono text-gray-500">
              GENERATION_PROMPT.SH
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 text-left font-mono text-gray-300">
            <div className="flex gap-2">
              <span className="text-green-500">$</span>
              <span>
                {text}
                <span className="animate-pulse inline-block w-2 h-5 align-middle bg-purple-500 ml-1" />
              </span>
            </div>
            <div className="mt-2 text-gray-500 text-sm">
              {text.length === fullText.length && "> Processing request..."}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-2xl flex-shrink-0"
        >
          <a
            href="https://www.virax.ai/image2video"
            className="group relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white text-lg font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] cursor-pointer"
          >
            <Play className="fill-current w-5 h-5" />
            <span>Generate Uncensored Content NOW</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-3 text-xs text-gray-500">
            By clicking &quot;Generate&quot;, you agree to our Terms of Service. Please use responsibly.
          </p>
        </motion.div>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-10 left-10 w-10 h-10 border-l-2 border-b-2 border-purple-500/30 rounded-bl-lg" aria-hidden />
      <div className="absolute top-24 right-10 w-10 h-10 border-r-2 border-t-2 border-purple-500/30 rounded-tr-lg" aria-hidden />
    </header>
  );
}
