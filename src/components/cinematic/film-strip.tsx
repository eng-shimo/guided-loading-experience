import nebula from "@/assets/posters/nebula.webp";
import noir from "@/assets/posters/noir.webp";
import dunes from "@/assets/posters/dunes.webp";
import rooftop from "@/assets/posters/rooftop.webp";

const FRAMES = [
  { src: nebula, alt: "" },
  { src: noir, alt: "" },
  { src: dunes, alt: "" },
  { src: rooftop, alt: "" },
];

const GROUP = [...FRAMES, ...FRAMES, ...FRAMES, ...FRAMES];

/** Slow horizontal film strip riding along the bottom of the intro. */
export function FilmStrip() {
  return (
    <div className="film-strip-scene" aria-hidden="true">
      <div className="film-strip">
        <div className="film-strip-track">
          {[0, 1].map((group) => (
            <div key={group} className="film-strip-group">
              <div className="film-perf" />
              <div className="film-frames">
                {GROUP.map((frame, i) => (
                  <div key={i} className="film-frame">
                    <img src={frame.src} alt="" suppressHydrationWarning width={132} height={88} loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
              <div className="film-perf film-perf-bottom" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
