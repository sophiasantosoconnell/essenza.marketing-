import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightPillars } from './components/HighlightPillars';
import { ComparisonAndPricing } from './components/ComparisonAndPricing';
import { PostShowcase } from './components/PostShowcase';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2E8DA] text-[#49372F] selection:bg-[#820B16] selection:text-[#F2E8DA]">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Compact Hero with Natural Brand Symbol */}
        <Hero />

        {/* Circular Highlight Pillars */}
        <HighlightPillars />

        {/* Unified Comparison & Values Section */}
        <ComparisonAndPricing />

        {/* 4 Dedicated Spaces for Posts */}
        <PostShowcase />
      </main>

      {/* Compact Footer with Attendants Contact */}
      <Footer />

      {/* Floating WhatsApp with Attendant Choice */}
      <FloatingWhatsApp />
    </div>
  );
}
