import { FloatingServices } from "./components/floating-services";
import { HeroSection } from "./components/hero-section";
import { Footer } from "./components/footer";

export default function Home () {
  return (
    <div className="min-h-screen w-full relative bg-black overflow-hidden">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
        }}
      />

      {/* Floating Services Background */}
      <FloatingServices />

      {/* Hero Section */}
      <HeroSection />

      {/* Geometric Footer */}
      <Footer />
    </div>
  );
}
