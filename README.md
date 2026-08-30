# Rewoo Vision Website.

A lightweight, Vercel-ready static landing page for Rewoo Vision with a light responsive interface, Bangla-first product messaging, validation targets, safety positioning, and app download controls.

## Project structure

```text
rewoo-vision-web/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── figures/
│   │   ├── hero-scene.svg
│   │   └── benchmark.svg
│   └── icons/
│       └── favicon.svg
├── downloads/
├── vercel.json
└── README.md
```

## Add the app files

The `downloads/` folder is intentionally empty in this package.

Before deployment, place the Android and/or iOS build in that folder with these exact names:

```text
downloads/RewooVision.apk
downloads/RewooVision.ipa
```

The **Download app** button on the website opens Android and iOS options. Each option points directly to the corresponding file above, so no code change is required after adding the binaries.

If only the Android APK is ready, add `RewooVision.apk` first. The iOS file can be added later using the exact filename shown above.

## Run locally

No build tools are required.

Option 1: Open `index.html` directly in a browser.

Option 2: Run a local web server from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to Vercel

1. Add the final app binary/binaries to `downloads/`.
2. Upload this project to GitHub or import the folder directly into Vercel.
3. Framework preset: **Other**.
4. Build command: leave empty.
5. Output directory: leave empty / use the project root.
6. Deploy.

`vercel.json` includes clean URLs and basic security headers. Static files in `downloads/` are served directly by Vercel and can be downloaded from the website buttons.

## Contact

- Location: Dhaka, Bangladesh
- Email: sakhawathosse912@gmail.com

## Content note

The validation values on the site are presented as current evaluation targets rather than achieved results. Rewoo Vision is positioned as visual assistance, not autonomous navigation.
