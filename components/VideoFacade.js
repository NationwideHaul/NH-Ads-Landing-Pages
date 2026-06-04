"use client";

import { useState } from "react";
import { PlayIcon } from "@/components/Icons";

function ytId(url) {
  const m =
    url.match(/[?&]v=([^&]+)/) ||
    url.match(/youtu\.be\/([^?]+)/) ||
    url.match(/embed\/([^?]+)/);
  return m ? m[1] : "";
}

// Lightweight YouTube facade: renders just the thumbnail (one image, zero player
// JS on load) so the page stays fast. Clicking opens the full video on our
// YouTube channel in a new tab (keeps the landing open behind it).
export default function VideoFacade({ url, label }) {
  const id = ytId(url);
  const watch = `https://www.youtube.com/watch?v=${id}`;
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
  );

  return (
    <a
      href={watch}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens YouTube)`}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-brand-black shadow-lg ring-1 ring-brand-black/10"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumb}
        alt={label}
        onError={() => setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-black/10 transition group-hover:bg-black/25" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-red shadow-lg transition group-hover:scale-110">
        <PlayIcon width={28} height={28} className="ml-1 text-brand-white" />
      </span>
      <span className="absolute inset-x-0 bottom-3 text-center text-sm font-medium text-white drop-shadow">
        {label}
      </span>
    </a>
  );
}
