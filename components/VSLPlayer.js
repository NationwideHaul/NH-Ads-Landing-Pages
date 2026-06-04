import { site } from "@/lib/site";
import { PlayIcon } from "@/components/Icons";
import VideoFacade from "@/components/VideoFacade";

// Embedded VSL player. Reads NEXT_PUBLIC_VSL_VIDEO_URL and picks a renderer:
//  • .mp4 / .webm  → native <video>
//  • youtube / vimeo → responsive <iframe>
//  • empty         → branded placeholder block
// >>> PLACEHOLDER: set NEXT_PUBLIC_VSL_VIDEO_URL in your env to go live.

function isYouTube(url) {
  return /youtube\.com|youtu\.be/.test(url);
}
function isVimeo(url) {
  return /vimeo\.com/.test(url);
}
function isFile(url) {
  return /\.(mp4|webm|mov)(\?.*)?$/i.test(url);
}

// Autoplay needs muted (browser policy). User can unmute via controls.
function toEmbedUrl(url) {
  if (isYouTube(url)) {
    const idMatch =
      url.match(/[?&]v=([^&]+)/) ||
      url.match(/youtu\.be\/([^?]+)/) ||
      url.match(/embed\/([^?]+)/);
    const id = idMatch ? idMatch[1] : "";
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      playsinline: "1",
      rel: "0",
      modestbranding: "1",
      loop: "1",
      playlist: id,
    });
    return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
  }
  if (isVimeo(url)) {
    const id = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return id
      ? `https://player.vimeo.com/video/${id[1]}?autoplay=1&muted=1&playsinline=1`
      : url;
  }
  return url;
}

// `url` overrides the env default (used to give each language its own video).
export default function VSLPlayer({ label, url: urlProp }) {
  const url = urlProp || site.vslVideoUrl;
  const frame =
    "relative aspect-video w-full overflow-hidden rounded-2xl bg-brand-black shadow-lg ring-1 ring-brand-black/10";

  if (!url) {
    return (
      <div className={frame}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-brand-white/90">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-red">
            <PlayIcon width={28} height={28} className="text-brand-white" />
          </span>
          <span className="text-sm font-medium">{label}</span>
          <span className="text-[11px] uppercase tracking-wide text-brand-white/40">
            VSL placeholder — set NEXT_PUBLIC_VSL_VIDEO_URL
          </span>
        </div>
      </div>
    );
  }

  if (isFile(url)) {
    return (
      <div className={frame}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          className="absolute inset-0 h-full w-full"
          controls
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={url} />
        </video>
      </div>
    );
  }

  // YouTube → lightweight facade (fast load, click opens the video on YouTube).
  if (isYouTube(url)) {
    return <VideoFacade url={url} label={label} />;
  }

  // Other embeds (e.g. Vimeo) keep the iframe.
  return (
    <div className={frame}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={toEmbedUrl(url)}
        title={label}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
