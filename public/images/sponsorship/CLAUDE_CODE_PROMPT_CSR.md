# Claude Code Prompt: Comita Technics — CSR Teaser \+ Dedicated Sponsorships Page

---

## KONTEKST PROJEKTA

Implementiraš dve stvari za sajt **Comita Technics** (cmtech.rs):

1. **Teaser blok** — kratka sekcija na dnu postojećeg landing page-a koja uvodi CSR temu i vodi na posebnu stranicu  
2. **Posebna stranica** — `/sponsorships` — kompletna stranica za Sponsorships & Donations program

Sajt je već izgrađen. Screenshot landing page-a ti je dostupan radi referentnog dizajna. Prilagodi se postojećem vizualnom identitetu.

---

## BREND I DIZAJN SISTEM

### Boje (obavezno koristiti CSS varijable)

:root {

  \--ct-blue-primary: \#1a56a0;      /\* Glavni brend plava \*/

  \--ct-blue-dark: \#0d3d7a;         /\* Tamna plava (headeri, footeri) \*/

  \--ct-blue-light: \#3b82c4;        /\* Svetlija plava (akcenti) \*/

  \--ct-blue-pale: \#e8f0fb;         /\* Pozadinska plava (section bg) \*/

  \--ct-white: \#ffffff;

  \--ct-gray-text: \#4a5568;         /\* Telo teksta \*/

  \--ct-gray-light: \#f7f9fc;        /\* Svetla pozadina \*/

  \--ct-accent: \#2196f3;            /\* Hover/focus akcent \*/

}

### Tipografija

- **Headings**: `'Barlow', sans-serif` — bold, kondenzovano, industrijsko osećanje  
- **Body**: `'Source Sans 3', sans-serif` — čitljivo, profesionalno  
- Google Fonts import: `Barlow:wght@600;700;800` \+ `Source+Sans+3:wght@400;600`

### Vizualni jezik

- Geometrijski dijagonalni elementi (plavi kutovi, isečeni uglovi)  
- Suptilne mreže/linije kao pozadinska tekstura  
- Ikonice: Lucide ili Heroicons (SVG inline)  
- Slike: koristi `object-fit: cover` sa plavim overlay gradijentima  
- CTA dugmad: plava pozadina, beli tekst, bez zaobljenih uglova (border-radius max 4px), hover sa tamnjim plavim  
- Kartice: bela pozadina, suptilna senka, leva plava border linija (4px solid var(--ct-blue-primary))

---

## DEO 1: TEASER BLOK ZA LANDING PAGE

### Pozicija

Ubaci pre `<footer>` sekcije, posle "Our Partners" sekcije.

### HTML struktura

\<section class="csr-teaser" id="community"\>

  \<\!-- Pozadina: tamno plava sa suptilnom mrežom \--\>

  \<\!-- Levo: tekst i CTA | Desno: 3 ikonice-kategorije \--\>

\</section\>

### Sadržaj

**Oznaka iznad naslova (overline):**

COMMUNITY & SOCIAL RESPONSIBILITY

**Glavni naslov:**

Engineering Progress.

Preserving Heritage.

**Podnaslov/opis:**

Comita Technics believes that technical excellence and social responsibility go hand in hand. Through our sponsorship and donation program, we support education, cultural heritage, environmental protection, and community development across the region.

**CTA dugme:**

\[Learn More & Apply →\]  →  vodi na /sponsorships

**Desna strana — 3 ikona-kartice (horizontalno ili vertikalno):**

| Ikona (SVG) | Naslov | Opis |
| :---- | :---- | :---- |
| 🏛️ `landmark` | Cultural Heritage | Restoring sacred sites and historical landmarks |
| 🎓 `graduation-cap` | Education | Supporting technical training and scholarships |
| 🌿 `leaf` | Environment | Promoting sustainability and ecological awareness |

### Vizualni stil teasera

- Pozadina: `var(--ct-blue-dark)` sa `opacity: 0.08` mrežom od finih linija (CSS background-image: linear-gradient grid pattern)  
- Tekst: beli  
- Ikona-kartice: poluprovidna bela pozadina (rgba(255,255,255,0.08)), hover → rgba(255,255,255,0.15)  
- Dijagonalni prelaz na dnu prema sledećem footer elementu

### CSS klase (naming convention sajta)

.csr-teaser

.csr-teaser\_\_inner

.csr-teaser\_\_content

.csr-teaser\_\_heading

.csr-teaser\_\_desc

.csr-teaser\_\_cta

.csr-teaser\_\_cards

.csr-card

.csr-card\_\_icon

.csr-card\_\_title

.csr-card\_\_text

---

## DEO 2: POSEBNA STRANICA — `/sponsorships`

### Fajl

`sponsorships.html` (ili odgovarajući template u projektu)

### Kompletan sadržaj stranice (u redosledu sekcija)

---

### SEKCIJA 1: HERO

**Pozadina:** Tamno plava (`var(--ct-blue-dark)`) sa geometrijskim dijagonalnim elementima, opciono sa suptilnim overlay-em na sliku inženjera koji gledaju crkvu u obnovi (Image 1 iz brend materijala — `CT___sponsor_page.png`).

**Sadržaj:**

\[breadcrumb\] Home / Community / Sponsorships & Donations

\[overline\] CORPORATE SOCIAL RESPONSIBILITY

\[h1\] Supporting Initiatives That

     Create Lasting Value for Society

\[p\] Comita Technics is committed to responsible business practices and

    contributing to the sustainable development of the communities in

    which we operate. Through sponsorships and donations, we support

    projects that promote education, safety, environmental protection,

    innovation, and social well-being.

\[CTA buttons\]

  \[Submit a Request →\]   \[Learn About Our Program ↓\]

**Statistike ispod (3 broja u redu):**

7         |   Since 2021   |   Regions Covered

Support   |   Active CSR   |   Serbia & Region

Areas     |   Commitment   |

---

### SEKCIJA 2: ABOUT THE PROGRAM

**Layout:** Levo tekst (60%), desno infografika ili slika (40%)

**Sadržaj:**

\[h2\] About Our Sponsorship and Donation Program

Comita Technics is a company specializing in technical maintenance,

engineering services, and critical infrastructure support. We

recognize that our work shapes not just energy systems — but the

communities around them.

Our sponsorship and donation activities are focused on initiatives

that deliver measurable benefits, encourage professional development,

improve quality of life, and contribute to the advancement of local

communities.

We carefully evaluate all requests to ensure alignment with our

corporate values and social responsibility objectives.

\[Quote box, plava leva granica:\]

"Together, we build infrastructure that lasts — and communities

that thrive."

**Desno:** Infografika sa "Blue Heart" ikonom (CT logo unutar srca) i 4 ključne vrednosti oko nje (Safety · Community · Heritage · Innovation). Može biti SVG ilustracija u CT plavoj.

---

### SEKCIJA 3: AREAS WE SUPPORT

**Layout:** Grid 3×3 (ili 4+3) — kartice sa ikonom, naslovom, kratkim opisom

**Pozadina sekcije:** `var(--ct-blue-pale)`

**Naslov sekcije:**

\[h2\] Areas We Support

\[p\]  We direct our resources toward seven key areas that align with

     our engineering values and community commitment.

**7 kartica:**

| \# | Ikona | Naslov | Opis |
| :---- | :---- | :---- | :---- |
| 1 | `graduation-cap` | Education & Professional Development | Supporting educational institutions, technical training programs, student competitions, scholarships, and initiatives that foster knowledge and innovation. |
| 2 | `shield-check` | Safety & Workplace Excellence | Projects that promote occupational health and safety, emergency preparedness, and the development of a strong safety culture. |
| 3 | `leaf` | Environmental Protection | Activities aimed at environmental preservation, sustainability, energy efficiency, waste reduction, and ecological awareness. |
| 4 | `users` | Community Development | Supporting local initiatives that improve living conditions, strengthen communities, and create opportunities for social inclusion. |
| 5 | `flask-conical` | Science & Innovation | Encouraging research, technological development, engineering excellence, and innovation-oriented projects. |
| 6 | `heart-handshake` | Humanitarian & Social Initiatives | Providing support for charitable organizations, humanitarian actions, and projects assisting vulnerable groups. |
| 7 | `landmark` | Cultural & Religious Heritage | Supporting the preservation, restoration, and promotion of cultural and religious heritage sites, as well as projects that strengthen community identity and social cohesion. |

**Kartica 7 (Cultural Heritage) — vizuelno istaknuta:**

- Šira od ostalih (span 2 kolone ili featured stil)  
- Pozadinska slika sa plavim overlay-em — referenca na `Sponsor_page_pic_7.png` (slika inženjera i crkve)  
- Tekst u beloj boji  
- Podnaslov: *"Applying engineering precision to the preservation of cultural landmarks."*

---

### SEKCIJA 4: ELIGIBILITY

**Layout:** Dva stupca — Levo: Ko može aplicirati | Desno: Evaluacioni kriterijumi

**Pozadina:** Bela

**Naslov:**

\[h2\] Who Can Apply & How We Evaluate

**Levo — Ko može aplicirati:**

Comita Technics considers applications from:

✓ Educational institutions

✓ Non-governmental organizations (NGOs)

✓ Professional associations

✓ Scientific and research organizations

✓ Local community organizations

✓ Humanitarian and charitable institutions

✓ Cultural and sports organizations

⚠ Applications from individuals are generally not considered

  unless submitted through a registered organization.

**Desno — Kriterijumi evaluacije:**

Each application is assessed based on:

◆ Alignment with Comita Technics' values and business principles

◆ Social impact and public benefit

◆ Feasibility and transparency of the project

◆ Long-term sustainability of results

◆ Compliance with applicable laws and regulations

---

### SEKCIJA 5: APPLICATION PROCESS

**Layout:** Horizontalni timeline — 4 koraka

**Pozadina:** `var(--ct-blue-pale)`

**Naslov:**

\[h2\] Application Process

\[p\]  A straightforward four-step process — transparent, fair, and efficient.

**4 koraka:**

\[1\]                    \[2\]                    \[3\]                    \[4\]

Submit Request    →  Provide Details    →  Review Process    →  Decision

Submit a           Provide detailed      Our team reviews      Applicants are

sponsorship or     information about     the application       informed of the

donation request   the organization,     and may request       decision following

using the online   project objectives,   additional            the evaluation

application form.  expected outcomes,    information if        process.

                   and funding           necessary.

                   requirements.

**Vizualni stil:** Numerisani krugovi u CT plavoj, horizontalna linija koja ih povezuje, svaki korak u beloj kartici sa senkom.

---

### SEKCIJA 6: IMPORTANT INFORMATION (Disclaimer)

**Layout:** Kompaktna sekcija, siva pozadina, ikona upozorenja

**Sadržaj:**

\[\!\] Important Information

Comita Technics reserves the right to:

• Request additional documentation

• Decline applications that do not meet established criteria

• Prioritize projects based on available resources and strategic priorities

Submission of an application does not constitute an obligation on the part

of Comita Technics to provide sponsorship or financial support.

---

### SEKCIJA 7: CONTACT / CTA

**Layout:** Centriran, tamno plava pozadina, dijagonalni uglovi

**Sadržaj:**

\[h2\] Questions About Sponsorships and Donations?

For additional information regarding sponsorship and donation opportunities,

please contact our team directly.

\[ikona email\] donations@comitatechnics.com

\[ikona email\] office@cmtech.rs

\[ikona phone\] \+381 (11) 3818100

\[dugme\] Contact Us →

\[dugme, outline\] Submit a Request →

---

### NAVIGACIJA / HEADER

Koristi isti header kao na landing page-u (logo \+ nav). Active state na navigation item-u koji odgovara Community/CSR sekciji.

---

## TEHNIČKE NAPOMENE

### Responsiveness

- Mobile-first pristup  
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)  
- Na mobilnom: sve kartice postaju single-column  
- Hero statistike: 1 kolona na mobilnom  
- Timeline: vertikalan na mobilnom

### Animacije

- `IntersectionObserver` za fade-in \+ slide-up efekte na karticama i koracima  
- `animation-delay` staggering na karticama (0.1s razmak po kartici)  
- Hover na karticama: `transform: translateY(-4px)` \+ senka  
- Smooth scroll na "\#" linkovima

### Accessibility

- `aria-label` na svim ikonicama  
- `role="list"` na listama podrške  
- `focus-visible` stilovi na svim interaktivnim elementima  
- Alt tekst na slikama

### Ikonice

Koristi inline SVG (Heroicons ili Lucide) — NE external icon font biblioteke da bi izbegao FOIC. Potrebne ikonice: `graduation-cap`, `shield-check`, `leaf`, `users`, `flask-conical`, `heart-handshake`, `landmark`, `mail`, `phone`, `arrow-right`, `check`, `alert-triangle`.

### Linkovi

- Teaser CTA → `/sponsorships`  
- "Submit a Request" → `/sponsorships#apply` ili external form URL (placeholder `#apply`)  
- Email linkovi → `mailto:`  
- Tel linkovi → `tel:`

---

## FAJLOVI KOJI POSTOJE (referentne slike od klijenta)

Slike su dostupne u projektu i treba ih koristiti:

| Fajl | Upotreba |
| :---- | :---- |
| `CT___sponsor_page.png` | Hero pozadinska slika (inženjeri \+ crkva \+ CT heart logo) |
| `Sponsor_page_pic_2-3.png` | About sekcija (inženjer \+ hands with heart — diptih) |
| `Sponsor_page_pic_7.png` | Cultural Heritage kartica (istaknuta) |
| `Engineering_Progress_and_Preserving_Heritage.png` | Opciono: sidebar infografika |

---

## ISPORUKA

Implementiraj:

1. **`csr-teaser.html`** (ili komponenta) — izolovani teaser blok spreman za umetanje u landing page  
2. **`sponsorships.html`** — kompletna posebna stranica

Oba fajla treba da budu self-contained sa svim stilovima i skriptama unutra (osim eksternih fontova sa Google Fonts CDN-a).  
