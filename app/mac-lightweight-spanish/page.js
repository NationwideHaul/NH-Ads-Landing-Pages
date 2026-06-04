import { copy as copyEs } from "@/copy/copy.es";
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
import HtmlLang from "@/components/HtmlLang";

// Spanish version of the MAC FL Lightweight landing. Same components, Spanish
// copy (copy.es.js). The form routes to the Spanish GHL webhook via locale="es".
export const metadata = {
  title: copyEs.meta.title,
  description: copyEs.meta.description,
  openGraph: {
    title: copyEs.meta.title,
    description: copyEs.meta.description,
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <HtmlLang lang="es" />
      <AnnouncementBar copy={copyEs} />
      <Header copy={copyEs} />
      <main>
        <Hero copy={copyEs} />
        <Reveal><Gallery copy={copyEs} /></Reveal>
        <Reveal><SpecsTable copy={copyEs} /></Reveal>
        <Reveal><OemMarquee copy={copyEs} /></Reveal>
        <Reveal><Calculator copy={copyEs} /></Reveal>
        <Reveal><Edge copy={copyEs} /></Reveal>
        <Reveal><SocialProof copy={copyEs} /></Reveal>
        <Reveal><FAQ copy={copyEs} /></Reveal>
        <Reveal><TwoTierCTA copy={copyEs} /></Reveal>
        <Reveal><Ending copy={copyEs} locale="es" /></Reveal>
      </main>
      <Footer copy={copyEs} />
    </>
  );
}
