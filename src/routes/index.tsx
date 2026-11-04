import { createFileRoute } from "@tanstack/react-router";
import { FilmReelMark } from "@/components/cinematic/animated-logo";
import heroAuditorium from "@/assets/hero-auditorium.webp";
import posterDunes from "@/assets/posters/dunes.webp";
import posterNebula from "@/assets/posters/nebula.webp";
import posterNoir from "@/assets/posters/noir.webp";
import posterRooftop from "@/assets/posters/rooftop.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ElCinema — Your Cinematic Experience" },
      {
        name: "description",
        content:
          "ElCinema: showtimes, screens and stories. Step past the curtain into tonight's programme.",
      },
      { property: "og:title", content: "ElCinema — Your Cinematic Experience" },
      {
        property: "og:description",
        content: "Showtimes, screens and stories — step past the curtain into tonight's programme.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ElCinema — Your Cinematic Experience" },
      {
        name: "twitter:description",
        content: "Showtimes, screens and stories — step past the curtain into tonight's programme.",
      },
    ],
    links: [
      // The loader waits on this image — start it downloading at HTML parse,
      // before hydration, so "ready" lands as early as possible.
      { rel: "preload", href: heroAuditorium, as: "image" },
    ],
  }),
  component: Index,
});

const FILMS = [
  { src: posterNebula, title: "Nebula Drift", meta: "Sci-Fi · 2h 08m", badge: "16+" },
  { src: posterNoir, title: "Noir Protocol", meta: "Thriller · 1h 54m", badge: "15+" },
  { src: posterDunes, title: "Dunes of Mars", meta: "Adventure · 2h 22m", badge: "13+" },
  { src: posterRooftop, title: "Rooftop Serenade", meta: "Romance · 1h 47m", badge: "G" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4 md:px-10">
        <a href="/" className="flex items-center gap-2.5">
          <FilmReelMark className="h-7 w-7 text-gold" />
          <span className="font-display text-xl tracking-[0.14em] text-foreground">ELCINEMA</span>
        </a>
        <nav className="flex items-center gap-5 text-[0.7rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
          <a href="#now-showing" className="transition-colors hover:text-gold">
            Now Showing
          </a>
          <a href="#programme" className="hidden transition-colors hover:text-gold sm:inline">
            Programme
          </a>
        </nav>
      </header>

      <main>
        <section className="relative isolate min-h-[92vh] overflow-hidden">
          <img
            data-hero
            src={heroAuditorium}
            alt="The red auditorium of ElCinema before the lights go down"
            className="hero-reveal absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero-shade absolute inset-0" aria-hidden="true" />
          <div className="reveal-item relative mx-auto flex min-h-[92vh] max-w-3xl flex-col items-center justify-end px-6 pb-24 text-center [--reveal-delay:120ms]">
            <p className="eyebrow">Doors open every evening from 17:00</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl md:text-7xl">
              Tonight, the screen <span className="text-gradient-gold">is yours</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Four screens, one purpose: stories shown the way they were meant to be seen — dark
              room, bright projector, nothing between you and the film.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#now-showing"
                className="rounded-md bg-primary px-6 py-3 text-[0.7rem] font-semibold tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-gold-deep"
              >
                Tonight&rsquo;s programme
              </a>
              <a
                href="#programme"
                className="rounded-md border border-border bg-background/40 px-6 py-3 text-[0.7rem] font-semibold tracking-[0.24em] text-foreground uppercase backdrop-blur transition-colors hover:bg-accent"
              >
                Screen times
              </a>
            </div>
          </div>
        </section>

        <section id="now-showing" className="mx-auto max-w-6xl px-6 py-20">
          <div className="reveal-item [--reveal-delay:240ms]">
            <p className="eyebrow">On screen now</p>
            <h2 className="mt-2 font-display text-4xl tracking-wide">Now Showing</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {FILMS.map((film, i) => (
              <article
                key={film.title}
                className="reveal-item group overflow-hidden rounded-xl border border-border bg-card [--reveal-delay:360ms]"
                style={{ "--reveal-delay": `${360 + i * 90}ms` } as React.CSSProperties}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={film.src}
                    alt={`${film.title} poster`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-3 right-3 rounded-sm bg-background/80 px-2 py-0.5 font-display text-xs tracking-widest text-gold backdrop-blur">
                    {film.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg tracking-wider">{film.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{film.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="programme" className="border-y border-border bg-card/60">
          <div className="reveal-item mx-auto grid max-w-6xl gap-8 px-6 py-14 [--reveal-delay:200ms] sm:grid-cols-3">
            <div>
              <p className="eyebrow">Screen times</p>
              <p className="mt-2 font-display text-2xl tracking-wide">18:00 · 20:30 · 23:00</p>
            </div>
            <div>
              <p className="eyebrow">Ticket desk</p>
              <p className="mt-2 font-display text-2xl tracking-wide">Opens 1 hour before</p>
            </div>
            <div>
              <p className="eyebrow">Late show</p>
              <p className="mt-2 font-display text-2xl tracking-wide">Midnight classic, Fridays</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-10 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <FilmReelMark className="h-4 w-4 text-gold" /> ElCinema — your cinematic experience
        </span>
        <span>Programme changes daily.</span>
      </footer>
    </div>
  );
}
