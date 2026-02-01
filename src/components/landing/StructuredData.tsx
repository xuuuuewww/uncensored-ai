import { faqs } from "@/lib/faq-data";

export function StructuredData() {
  const webApplication = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Uncensored AI",
    description:
      "Use Uncensored AI for unfiltered AI chat, an uncensored AI image generator, and uncensored image-to-video AI—fewer refusals, fast creation, more control.",
    applicationCategory: "MultimediaApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Unfiltered AI chat",
      "Uncensored AI image generator",
      "Image-to-video AI",
      "Fewer refusals",
      "Fast creation",
      "More control",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
