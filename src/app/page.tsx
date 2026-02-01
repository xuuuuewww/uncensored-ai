import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { CelebrityPhotosSection } from "@/components/landing/CelebrityPhotosSection";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { WhyChoose } from "@/components/landing/WhyChoose";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { StructuredData } from "@/components/landing/StructuredData";

const PICTURE_IMAGE =
  "https://images.unsplash.com/photo-1764258560164-97f682adef36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const VIDEO_IMAGE =
  "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const CHAT_IMAGE =
  "https://images.unsplash.com/photo-1714899984906-a3e8f43025a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-black font-sans selection:bg-purple-500/30 text-slate-200">
        <Navbar />

        <main role="main">
          <Hero />
          <CelebrityPhotosSection />

          <FeatureSection
            id="features"
            title="Uncensored AI Picture Software"
            description="Create bold visuals faster with an uncensored AI picture software workflow that's designed to reduce unnecessary interruptions. Our uncensored AI image generator helps you turn prompts into high-quality images and refine results through iterations."
            imageSrc={PICTURE_IMAGE}
            imageAlt="Uncensored AI Picture Software - AI generated art"
            features={[]}
          />
          <FeatureSection
            title="Uncensored Image to Video AI"
            description="Turn a single image into a short cinematic clip using uncensored image to video AI. Upload a photo, describe the motion you want. This uncensored image to video AI experience is made to keep the process smooth: fewer stops, faster iteration, and more control over the final &quot;feel&quot; of the clip."
            imageSrc={VIDEO_IMAGE}
            imageAlt="Uncensored Image to Video AI - transform images to video"
            features={[]}
            reversed
          />
          <FeatureSection
            id="chat"
            title="Uncensored AI Chat"
            description="Looking for uncensored AI for conservatives that feels more natural and less stop-and-go? Our uncensored AI chatbot is built for long-form conversation, creative brainstorming, roleplay-style writing, and opinionated discussions—while still keeping clear safety boundaries."
            imageSrc={CHAT_IMAGE}
            imageAlt="Uncensored AI Chat - open AI conversations"
            features={[]}
          />
          <WhyChoose />
          <FAQ />
        </main>

        <Footer />
      </div>
    </>
  );
}
