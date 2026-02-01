"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faq-data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-purple-500">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our platform and policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`border rounded-xl transition-all duration-300 group ${
                openIndex === index
                  ? "bg-gray-900/80 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                  : "bg-gray-900/30 border-gray-800 hover:border-gray-700"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer rounded-xl"
              >
                <span
                  className={`text-lg font-medium transition-colors ${
                    openIndex === index ? "text-white" : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`ml-4 p-1 rounded-full border transition-all duration-300 shrink-0 ${
                    openIndex === index
                      ? "bg-purple-600 border-purple-500 text-white rotate-180"
                      : "bg-transparent border-gray-700 text-gray-400"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
