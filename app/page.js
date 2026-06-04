import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OemMarquee from "@/components/OemMarquee";
import Calculator from "@/components/Calculator";
import Edge from "@/components/Edge";
import Gallery from "@/components/Gallery";
import SocialProof from "@/components/SocialProof";
import SpecsTable from "@/components/SpecsTable";
import FAQ from "@/components/FAQ";
import TwoTierCTA from "@/components/TwoTierCTA";
import Ending from "@/components/Ending";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// MAC FL Lightweight Spec Dump Trailer — English master landing page.
// Section order follows the brief: one job per section, message-matched.
export default function Page() {
  return (
    <>
      <AnnouncementBar />   {/* Top strip — WE F!NANCE ALL EQUIPMENT IN-HOUSE */}
      <Header />
      <main>
        <Hero />                              {/* 1. Hero (text+CTA, then VSL) */}
        <Reveal><Gallery /></Reveal>          {/* See it for yourself (right after hero) */}
        <Reveal><SpecsTable /></Reveal>       {/* Standard vs Lightweight (after gallery) */}
        <Reveal><OemMarquee /></Reveal>       {/* Authorized MAC dealer + OEM logos */}
        <Reveal><Calculator /></Reveal>       {/* Comparison calculator */}
        <Reveal><Edge /></Reveal>             {/* Nationwide Haul edge */}
        <Reveal><SocialProof /></Reveal>      {/* Social proof (reviews) */}
        <Reveal><FAQ /></Reveal>              {/* FAQ */}
        <Reveal><TwoTierCTA /></Reveal>       {/* Two-tier CTA */}
        <Reveal><Ending /></Reveal>           {/* Ending + lead form (#talk) */}
      </main>
      <Footer />
    </>
  );
}
