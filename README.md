# 🎬 Scrapbook Portfolio — Next.js

A mixed-media digital scrapbook portfolio for a creative marketer in film publicity + branding.
No corporate vibes. Just tape, polaroids, and good press coverage.

## ✦ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom CSS (no CSS-in-JS library needed)
- **Fonts:** Playfair Display (serif/editorial) + Inter (body) + Caveat (handwritten)
- **TypeScript:** Yes

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

For production:
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout (Nav + fonts)
│   ├── page.tsx            # Home — collage hero
│   ├── about/page.tsx      # About — scrapbook desk
│   ├── work/page.tsx       # Work — film + content + events
│   ├── creative/page.tsx   # Creative Projects
│   ├── contact/page.tsx    # Contact — pinned note form
│   └── not-found.tsx       # 404 page
│
├── components/
│   ├── Nav.tsx             # Sticky nav (desktop + mobile)
│   ├── Polaroid.tsx        # Polaroid frame component
│   ├── PaperCard.tsx       # Versatile paper card (lined, dotted, pink, blue...)
│   ├── FilmStrip.tsx       # Film strip visual
│   └── Doodle.tsx          # SVG hand-drawn doodles (stars, arrows, underlines)
│
├── styles/
│   └── globals.css         # All base styles, textures, typography
│
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## 🎨 Design Tokens

### Colors
| Name | Hex |
|------|-----|
| Dusty Pink | `#D98C9A` |
| Muted Red | `#B5525C` |
| Washed Blue | `#6F8FAF` |
| Navy | `#1F2A44` |
| Cream (bg) | `#F6F1EA` |
| Light Gray | `#D9D9D9` |
| Ink (text) | `#1A1A1A` |

### Fonts (from Google Fonts)
- **Playfair Display** — headings, editorial display
- **Inter** — body text
- **Caveat** — handwritten annotations, nav, captions

---

## ✏️ Customizing Content

### Your name / branding
In `app/layout.tsx`, update `metadata.title` and `metadata.description`.
In `components/Nav.tsx`, update the logo text (currently "✦ my portfolio").

### Home page (`app/page.tsx`)
- Update the bio blurb in the hero section
- Stat cards show 5+, 25+, 6+ — adjust as needed
- Press outlet list at the bottom

### Work page (`app/work/page.tsx`)
- `films[]` array — update each film's title, type, note
- `services[]` array — the four "how I support campaigns" sections
- Content marketing section — update Postal.io details

### About page (`app/about/page.tsx`)
- Update the bio text paragraphs
- Skills/tool chips
- Stats grid (5+, 25+, etc.)

### Creative page (`app/creative/page.tsx`)
- `projects[]` array — update each creative area's title, tag, note, tags

### Contact page (`app/contact/page.tsx`)
- Update the availability statement
- Update the select dropdown options
- Wire up the form to your email service (see below)

---

## 📬 Wiring Up the Contact Form

The form currently uses local state only (`useState`). To make it functional:

### Option A — Formspree (easiest)
```tsx
// Replace handleSubmit in contact/page.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  if (res.ok) setSent(true)
}
```

### Option B — Next.js API route
Create `app/api/contact/route.ts` and use Nodemailer or Resend.

---

## 🖼️ Adding Real Images

The Polaroid components currently show colored placeholder areas.
Replace with actual `<img>` or Next.js `<Image>` tags:

```tsx
// In Polaroid.tsx or inline on any page:
<Polaroid caption="red carpet ✨" rotate={-4}>
  <Image
    src="/photos/red-carpet.jpg"
    alt="Red carpet at Tribeca"
    width={140}
    height={120}
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
  />
</Polaroid>
```

Place your photos in `/public/photos/`.

---

## 📱 Responsive Design

- Hero collage floats hide below 860px
- About and Work sections stack to single column below 720px
- Nav collapses to hamburger menu below 640px

---

## 🚢 Deployment

### Vercel (recommended)
```bash
npx vercel
```
Or connect your GitHub repo to vercel.com — zero config needed.

### Netlify
```bash
npm run build
# deploy the /out folder (static export)
```

Note: The `next.config.js` is set to `output: 'export'` for static hosting.
If you want server-side features (API routes), remove that line and use Vercel.

---

## 📝 Content Checklist

Before launch, make sure you've updated:

- [ ] Your name throughout (search for "my portfolio")
- [ ] Film titles in `work/page.tsx`
- [ ] Bio text in `about/page.tsx`
- [ ] Contact form email destination
- [ ] Real photos replacing polaroid placeholders
- [ ] `metadata` in `app/layout.tsx` (title, description, OG)
- [ ] Favicon in `/public/favicon.ico`

---

Built with ✦ for someone who loves film, press, and a good scrapbook.
