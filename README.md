# The Line of Embodiments — Collected Treasures of Dudjom Lingpa & Dudul Dorje

A scholarly bilingual (English / Rioplatense Spanish) website presenting:

1. **The Collected Treasures of Dudjom Lingpa** (1835–1904) — 21 volumes.
2. **The Kathog Collected Terma Dharmas of Rigdzin Dudul Dorje** (1615–1672) — 11 volumes.
3. **The Line of Embodiments** — the full text (English + Rioplatense Spanish) of two pure-vision
   prayers by Lama Dorje Sherab, tracing the incarnation-lines of the two present translators,
   Lama Federico Andino (Guru Suryagriddha) and Lama Dorje Sherab (Dzamling Khyentse Dorje Sherab).

Translated by Lama Federico Andino & Lama Dorje Sherab · vajrakula.com

## Structure

- `index.html` — the single-page site (EN/ES toggle via `data-lang` attributes + `assets/lang.js`)
- `assets/style.css` — stylesheet
- `assets/lang.js` — language-toggle script

Built from the existing "Collected Treasures of Dudjom Lingpa" site as a base, extended with:
- A new Dudul Dorje biography and 11-volume section, summarized from the project's translated
  volume manuscripts.
- A new "Line of Embodiments" section containing the complete bilingual text of both embodiment
  prayers, plus the existing "Garland of Lives" lineage table.

## Deploying

This is a static site — no build step required. To publish via GitHub Pages:

```bash
git init
git add -A
git commit -m "Initial site: Dudjom Lingpa + Dudul Dorje + Line of Embodiments"
git branch -M main
git remote add origin <your-new-repo-url>
git push -u origin main
```

Then enable GitHub Pages (Settings → Pages → Deploy from branch → `main` / root) to serve it live.
