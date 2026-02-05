import Image from "next/image";
import { Twitter, Github, Disc2 } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="https://www.virax.ai/" className="flex items-center gap-2 mb-6">
              <Image
                src={logo}
                alt="Uncensored AI"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-white font-bold text-xl tracking-tight">
                Uncensored<span className="text-purple-500">AI</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering creators with unrestricted AI tools for image, video, and text generation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Discord">
                <Disc2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Product links">
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.virax.ai/image2video" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Image Generator
                </a>
              </li>
              <li>
                <a href="https://www.virax.ai/image2video" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Video Creator
                </a>
              </li>
              <li>
                <a href="https://www.virax.ai/image2video" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  AI Chat
                </a>
              </li>
              <li>
                <a href="https://www.virax.ai/image2video" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Resources links">
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.virax.ai/image2video" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://www.virax.ai/image2video" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Prompt Guide
                </a>
              </li>
              <li>
                <a href="https://www.virax.ai/image2video" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Community Gallery
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Legal links">
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.virax.ai/image2video" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://www.virax.ai/image2video" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.virax.ai/image2video" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Content Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <p className="text-gray-600 text-sm">
            © 2026 Uncensored AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
