# 📊 Ekonomski Kalkulator (PWA)

**Ekonomski Kalkulator** je moderna, lagana i visokofunkcionalna web aplikacija dizajnirana za brzo i precizno vršenje ekonomskih proračuna. Projekt je razvijen kao **Progressive Web App (PWA)**, što omogućava rad u offline režimu, keširanje podataka i instalaciju direktno na mobilne uređaje uz nativno iskustvo.

🔗 **Pristupite aplikaciji uživo:** [https://akane396.github.io/ekonomski-kalkulator/](https://akane396.github.io/ekonomski-kalkulator/)

---

## 🚀 Glavne Karakteristike

* **Offline Support:** Zahvaljujući implementaciji `service-worker.js`, aplikacija radi bez internet konekcije nakon prvog učitavanja.
* **PWA Optimizacija:** Koristi `manifest.json` za definisanje ikonica, boja sistema i ponašanja na početnom ekranu.
* **Smart Prompt:** Integrisan sistem koji automatski nudi instalaciju aplikacije nakon što korisnik pokaže interesovanje (treći ulazak).
* **Cross-Platform:** Potpuna podrška za Android i iOS (Add to Home Screen).
* **Performanse:** Fokus na maksimalnoj brzini i minimalizmu, bez teških eksternih biblioteka.

---

## 🛠 Tehnologije

Aplikacija je izgrađena korišćenjem "Vanilla" tehnologija za postizanje vrhunskih performansi i "Clean" koda:

* **HTML5 & CSS3:** Semantička struktura i responzivni dizajn prilagođen svim veličinama ekrana.
* **JavaScript (ES6+):** Napredna logika kalkulacija i upravljanje životnim ciklusom Service Worker-a.
* **Service Workers:** Upravljanje keš memorijom (Cache API) i omogućavanje rada u offline režimu.
* **Web App Manifest:** Konfiguracija za pretvaranje sajta u instalacionu aplikaciju.

---

## 📲 Instalacija

### 🤖 Android
Korisnici Android uređaja mogu preuzeti verziju aplikacije (Web Wrapper) za lakši pristup:
👉 [**Preuzmi Android (.apk)**](https://drive.google.com/drive/folders/1eNt1kQ1nmGBpxRR1lNGZm0r_Zv5OmlHS)

### 🍎 iOS (iPhone)
Za instalaciju na iOS uređaje:
1. Otvorite sajt putem **Safari** pretraživača.
2. Kliknite na dugme **Share** (ikona kvadrata sa strelicom).
3. Izaberite opciju **"Add to Home Screen"**.

---

## 📂 Struktura Projekta

* `index.html` – Glavni korisnički interfejs.
* `kalkulacije.js` – Osnovna logika za ekonomske proračune (Compound Interest, Inflacija, itd.).
* `kalkulacije.css` – Moderni stilovi sa fokusom na preglednost.
* `service-worker.js` – Skripta za offline funkcionalnost i keširanje resursa.
* `bijela.png` / `crna.png` – Optimizovane ikonice za svetli i tamni režim rada.

---

## 🌐 Hosting i Deployment

Aplikacija je hostovana putem **GitHub Pages** servisa, što osigurava visoku dostupnost, sigurnost i automatsko ažuriranje pri svakoj promeni koda.

---

**Autor:** [Akane396](https://github.com/Akane396)