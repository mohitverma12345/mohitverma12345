import React from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import LogosMarquee from "@/components/landing/LogosMarquee";
import MusicGenerator from "@/components/landing/MusicGenerator";
import LyricsGenerator from "@/components/landing/LyricsGenerator";
import AIStudio from "@/components/landing/AIStudio";
import Distribution from "@/components/landing/Distribution";
import Features from "@/components/landing/Features";
import Dashboard from "@/components/landing/Dashboard";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden" data-testid="landing-page">
      <Header />
      <Hero />
      <LogosMarquee />
      <MusicGenerator />
      <LyricsGenerator />
      <AIStudio />
      <Distribution />
      <Features />
      <Dashboard />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
