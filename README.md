# Ekonomski Kalkulator (PWA)

**Ekonomski Kalkulator** je moderna, lagana i visokofunkcionalna web aplikacija dizajnirana za brzo vršenje ekonomskih proračuna. Projekt je razvijen kao **Progressive Web App (PWA)**, što omogućava rad u offline režimu, keširanje podataka i instalaciju direktno na mobilne uređaje.

---

## 🚀 Glavne Karakteristike

* **Offline Support:** Zahvaljujući implementaciji `service-worker.js`, aplikacija radi i bez internet konekcije nakon prvog učitavanja.
* **PWA Optimizacija:** Aplikacija koristi `manifest.json` za nativno iskustvo na mobilnim platformama.
* **Smart Prompt:** Integrisan sistem koji automatski nudi preuzimanje aplikacije nakon trećeg ulaska korisnika.
* **Cross-Platform:** Potpuna podrška za Android (APK) i iOS (Add to Home Screen).
* **Performanse:** Fokus na brzini i minimalizmu, bez nepotrebnih biblioteka.

---

## 🛠 Tehnologije

Aplikacija je izgrađena korišćenjem "Vanilla" tehnologija za maksimalne performanse:

* **HTML5 & CSS3:** Struktura i responzivni dizajn.
* **JavaScript (ES6+):** Logika kalkulacija i upravljanje Service Worker-om.
* **Service Workers:** Upravljanje kešom i offline funkcionalnostima.
* **Web App Manifest:** Definisanje ikonica i ponašanja aplikacije na početnom ekranu.

---

## 📲 Instalacija

### Android
Korisnici Android uređaja mogu preuzeti zvaničnu verziju aplikacije (wrapper koji povlači web sadržaj) sa Google Drive-a:
👉 [**Preuzmi Android Aplikaciju (.apk)**](https://drive.google.com/drive/folders/1eNt1kQ1nmGBpxRR1lNGZm0r_Zv5OmlHS)

### iOS (iPhone)
Za instalaciju na iOS uređaje:
1. Otvorite sajt putem **Safari** pretraživača.
2. Kliknite na dugme **Share** (kvadrat sa strelicom).
3. Izaberite opciju **"Add to Home Screen"**.

---

## 📂 Struktura Projekta

* `index.html` - Glavni interfejs aplikacije.
* `kalkulacije.js` - Core logika za ekonomske proračune.
* `kalkulacije.css` - Stilovi prilagođeni mobilnim i desktop ekranima.
* `service-worker.js` - Upravljanje keširanjem i offline režimom.
* `bijela.png` / `crna.png` - Ikonice aplikacije za svetli i tamni mod/sistem.

---

## 🌐 Hosting i Deployment

Aplikacija je hostovana putem **GitHub Pages** servisa, što omogućava stabilnost i automatsko ažuriranje sadržaja pri svakom novom "push-u" koda.

**Autor:** [Akane396]