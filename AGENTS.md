<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project decisions

- Cinematic loader pacing constants (INTRO_MIN_MS, RETURN_MIN_MS, REDUCED_MIN_MS, EXIT_MS) live in `src/components/cinematic/loader-logic.ts` and are guarded by a speed-budget test in `src/test/loader-logic.test.ts` — keep the intro ≤1.7s and exit ≤1s when retiming; retime the matching CSS delays in `src/styles.css` together with `EXIT_MS` (it must cover the longest exit animation).
- Fonts are self-hosted in `public/fonts/*.woff2` (latin subsets, Bebas Neue + variable Outfit) and preloaded from the root head — do not reintroduce the Google Fonts stylesheet, it was a render-blocking third-party request.
- All photography is WebP under `src/assets` (hero 1600px, posters 640px-equivalent) — the loader waits on the hero image, so the hero must stay small and is preloaded via a `links` entry in `src/routes/index.tsx` head.
