# Building an Android APK (and Play Store AAB)

This site is a PWA, so the cleanest way to ship it as an Android app is a
**TWA (Trusted Web Activity)** — a thin native Android wrapper that opens the
deployed website full-screen, with no browser UI. Everything the wrapper needs
is already in this repo (`manifest.webmanifest`, icons, `twa-manifest.json`,
`.well-known/assetlinks.json`).

Pick ONE of the two paths below.

---

## Option A — PWABuilder (no local tooling, easiest)

1. Deploy the site (any host with HTTPS; Vercel is fine).
2. Go to **https://www.pwabuilder.com** and enter your deployed URL
   (e.g. `https://testapp-two-rho.vercel.app`).
3. Open the **Android** package → **Generate Package**.
4. Choose the signing key option (let it generate one, or upload your own) and
   download the `.zip`. It contains:
   - `app-release-signed.apk` — install directly on a phone.
   - `app-release-bundle.aab` — upload to Google Play.
   - `assetlinks.json` — the **exact** Digital Asset Links for your key.
   - `signing-key-info.txt` — **KEEP THIS SAFE** (needed for every future update).
5. Copy the `sha256_cert_fingerprints` value from the generated `assetlinks.json`
   into this repo's `.well-known/assetlinks.json`, set the `package_name` to match,
   redeploy, and confirm `https://YOUR_DOMAIN/.well-known/assetlinks.json` returns it.
   (This is what removes the URL bar / makes it a verified app.)

---

## Option B — Bubblewrap CLI (local build, full control)

Prereqs: **Node 18+**, **JDK 17**, **Android SDK** (Bubblewrap can install the
JDK/SDK for you on first run).

```bash
npm install -g @bubblewrap/cli

# Initialize from the live manifest (or reuse the committed twa-manifest.json):
bubblewrap init --manifest https://testapp-two-rho.vercel.app/manifest.webmanifest

# Build the APK + AAB:
bubblewrap build
```

Outputs: `app-release-signed.apk` and `app-release-bundle.aab`.

After the first build, print your signing fingerprint and put it in
`.well-known/assetlinks.json`:

```bash
bubblewrap fingerprint list
# or, from a keystore:
keytool -list -v -keystore ./android.keystore -alias android | grep SHA256
```

---

## Digital Asset Links (required to hide the URL bar)

`/.well-known/assetlinks.json` in this repo is a **template** with placeholders:

- `package_name` → your app's package id (default `com.palmhills.app`).
- `sha256_cert_fingerprints` → the SHA-256 of the key you sign the APK with
  (from PWABuilder's output or `keytool`/`bubblewrap fingerprint list`).

Replace both, redeploy, and verify:

```bash
curl https://YOUR_DOMAIN/.well-known/assetlinks.json
```

⚠️ If you publish on Google Play and use **Play App Signing**, Google re-signs
your app — add **Play's** SHA-256 (from Play Console → Setup → App integrity)
to the fingerprints array too (you can list multiple).

---

## Notes

- `twa-manifest.json` (repo root) is a Bubblewrap config prefilled for this app
  (portrait-locked, dark theme, icons). Update `host`/URLs if you use a custom
  domain, and `packageId` to your final package name.
- The APK wraps a single `start_url` (`/` = the default profile). To ship a
  per-person app (e.g. `/youssef`), set `startUrl`/`host` accordingly and use a
  distinct `packageId`.
- The icons used are `assets/icon-512.png` and `assets/icon-maskable-512.png`.
