import Image from "next/image";
import { copy as defaultCopy } from "@/copy/copy";

// Lightweight footer. Year is computed server-side at render.
export default function Footer({ copy = defaultCopy }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-brand-black/10 bg-white py-10">
      <div className="container-page text-center">
        <Image
          src="/nh-black.png"
          alt={copy.nav.logoAlt}
          width={1260}
          height={512}
          sizes="160px"
          className="mx-auto h-9 w-auto"
        />
        <p className="mt-2 text-sm text-brand-black/60">
          {copy.footer.tagline}
        </p>
        <p className="mt-4 text-xs text-brand-black/40">
          {copy.footer.rightsTemplate.replace("{year}", String(year))}
        </p>
      </div>
    </footer>
  );
}
