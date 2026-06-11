import PageNav from '@/components/PageNav'
import Image from 'next/image'

// Cover Up photo is cover-up.jpg
// Ocean photo is creative-ocean.heic (Aidan Harper)
// Studio photo (teal bg, black gloves) is creative-5.jpg (Brooke De La Torre)
const creativePhotos = [
  {
    src: '/photos/creative-1.jpg',
    photographer: 'Jackie Bostock',
    photographerUrl: 'https://www.instagram.com/filmbyjak',
    rotate: -2,
  },
  {
    src: '/photos/creative-2.jpg',
    photographer: 'Lacey Moranville',
    photographerUrl: 'https://www.instagram.com/_bylovelace',
    rotate: 2,
  },
  {
    src: '/photos/creative-5.jpg',
    photographer: 'Brooke De La Torre',
    photographerUrl: 'https://www.instagram.com/brookedphoto/',
    rotate: -1,
  },
  {
    src: '/photos/creative-ocean.jpg',
    photographer: 'Aidan Harper',
    photographerUrl: 'https://www.instagram.com/a1danharper',
    rotate: 1.5,
  },
]

export default function CreativePage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <PageNav />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Header — extra space between title and subtitle */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontWeight: 400,
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            marginBottom: 24,
          }}>
            Creative<br /><span style={{ color: '#E35292', fontStyle: 'italic' }}>Projects.</span>
          </h1>
          <p style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 18,
            fontStyle: 'italic',
            color: '#B32D56',
            maxWidth: 520,
          }}>
            Personal work, brand content, spec projects, and creative direction, all in one place.
          </p>
        </div>

        {/* ═══ SECTION 1 — Personal Projects ══════════════════════ */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: '#1A1A1A' }}>Personal Projects</h2>
            <div style={{ background: '#E35292', border: '2px solid #1A1A1A', padding: '2px 10px', boxShadow: '2px 2px 0 #1A1A1A' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Original Content</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 280px))', gap: 28, marginBottom: 24 }}>

            {/* Video 1 */}
            <div style={{ background: '#fff', border: '2.5px solid #1A1A1A', boxShadow: '4px 4px 0 #E35292', overflow: 'hidden', transform: 'rotate(-1deg)' }}>
              <div style={{ aspectRatio: '9/16', overflow: 'hidden', position: 'relative', borderBottom: '2px solid #1A1A1A' }}>
                <iframe
                  src="https://www.instagram.com/reel/DGjHUEOSvh2/embed"
                  style={{ width: '100%', height: '100%', border: 'none', display: 'block', position: 'absolute', inset: 0 }}
                  title="POV You're a Fly"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
              <div style={{ padding: '14px 16px 18px' }}>
                <h4 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: '#1A1A1A', marginBottom: 6 }}>POV You're a Fly</h4>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#1A1A1A', opacity: 0.7, lineHeight: 1.6 }}>
                  I created this video as a way to show my community how I unwind after a night out. Using CapCut and Picsart, I pieced together clips, transitions, and overlays to capture the energy of a typical evening in my life.
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div style={{ background: '#fff', border: '2.5px solid #1A1A1A', boxShadow: '4px 4px 0 #B32D56', overflow: 'hidden', transform: 'rotate(1.5deg)' }}>
              <div style={{ aspectRatio: '9/16', overflow: 'hidden', position: 'relative', borderBottom: '2px solid #1A1A1A' }}>
                <iframe
                  src="https://www.instagram.com/reel/DJcL2EGp85u/embed"
                  style={{ width: '100%', height: '100%', border: 'none', display: 'block', position: 'absolute', inset: 0 }}
                  title="Rattails and All!"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
              <div style={{ padding: '14px 16px 18px' }}>
                <h4 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: '#1A1A1A', marginBottom: 6 }}>Rattails and All!</h4>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#1A1A1A', opacity: 0.7, lineHeight: 1.6 }}>
                  As a way to exercise my editing skills with voiceovers and overlays, I created this video to showcase my new hairdo!
                </p>
              </div>
            </div>
          </div>

          {/* Instagram button */}
          <a
            href="https://www.instagram.com/sarahdaks"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 14,
              background: '#1A1A1A',
              color: '#fff',
              border: '2.5px solid #1A1A1A',
              padding: '10px 20px',
              textDecoration: 'none',
              boxShadow: '3px 3px 0 #E35292',
              display: 'inline-block',
            }}
          >
            See More on Instagram @sarahdaks →
          </a>
        </section>

        {/* ═══ SECTION 2 — Spec Project ════════════════════════════ */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: '#1A1A1A' }}>Spec Project</h2>
            <div style={{ background: '#FCE8E6', border: '2px solid #B32D56', padding: '2px 10px', boxShadow: '2px 2px 0 #B32D56' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#B32D56', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Spec Campaign</span>
            </div>
          </div>

          {/* It Follows campaign description */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 28, marginBottom: 24, alignItems: 'start' }} className="spec-grid">
            <div className="rose-card" style={{ padding: '24px 24px' }}>
              <div className="washi" style={{ width: 70, top: -10, left: 20, transform: 'rotate(-1.5deg)' }} />
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#B32D56', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
                Spec Relaunch Campaign · 2026
              </div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, color: '#1A1A1A', marginBottom: 12, lineHeight: 1.2 }}>
                <em>Before They Follow,<br />It Follows.</em>
              </h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#1A1A1A', opacity: 0.85, lineHeight: 1.7, marginBottom: 14 }}>
                A spec relaunch campaign built around the upcoming <em>It Follows</em> sequel, <em>They Follow</em>. The idea: use the sequel announcement as a cultural window to reintroduce the original to a generation that missed it — and prime a new audience before the sequel arrives.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#1A1A1A', opacity: 0.85, lineHeight: 1.7, marginBottom: 16 }}>
                The campaign spans social strategy, creator partnerships, a city-wide scavenger hunt, arthouse re-release screenings with Q&As, and a two-day experiential pop-up in LA.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Social Strategy', 'Experiential', 'Creator Partnerships', 'Press & Publicity', 'Re-Release Screenings', 'Scavenger Hunt'].map(t => (
                  <span key={t} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 600, color: '#B32D56', background: 'rgba(179,45,86,0.08)', border: '1px solid #B32D56', padding: '2px 8px', borderRadius: 999 }}>{t}</span>
                ))}
              </div>
            </div>

  
          </div>

          {/* Google Slides embed */}
          <div style={{ border: '2.5px solid #1A1A1A', boxShadow: '4px 4px 0 #B32D56', overflow: 'hidden' }}>
            <div style={{ background: '#FCE8E6', padding: '10px 16px', borderBottom: '2px solid #1A1A1A', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#B32D56', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                It Follows — Full Campaign Deck
              </span>
              <a href="https://docs.google.com/presentation/d/e/2PACX-1vRcjLOfHi98oxBchmForO4MjftAZwrxvmFM8YI-pNINjw_dtLERyGRUtmqFYRv4jA/pub?start=false&loop=false&delayms=3000" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 11, color: '#B32D56', textDecoration: 'none', border: '1.5px solid #B32D56', padding: '3px 10px' }}>
                Open Full Screen ↗
              </a>
            </div>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vRcjLOfHi98oxBchmForO4MjftAZwrxvmFM8YI-pNINjw_dtLERyGRUtmqFYRv4jA/embed?start=false&loop=false&delayms=3000"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                title="It Follows Spec Campaign Deck"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3 — Content for Brands ══════════════════════ */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: '#1A1A1A' }}>Content for Brands</h2>
            <div style={{ background: '#D2F4D2', border: '2px solid #1E9020', padding: '2px 10px', boxShadow: '2px 2px 0 #1E9020' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#1E9020', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Brand Partnerships</span>
            </div>
          </div>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: '#1A1A1A', opacity: 0.8, lineHeight: 1.7, maxWidth: 620, marginBottom: 28 }}>
            During my time at Postal.io, I worked on their brand management side, building a content calendar and reaching out to vendors to create content tied to holidays and events. This role challenged my ability to establish relationships with vendors and create content that would expand Postal's LinkedIn footprint.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div style={{ background: '#fff', border: '2.5px solid #1A1A1A', boxShadow: '4px 4px 0 #E35292', overflow: 'hidden', transform: 'rotate(-1deg)' }}>
              <div style={{ background: '#E35292', padding: '10px 14px', borderBottom: '2px solid #1A1A1A' }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Postal.io × Olympics 2024</span>
              </div>
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7220165001771200512?compact=1" style={{ width: '100%', height: 300, border: 'none', display: 'block' }} title="Postal Olympics post" allowFullScreen />
              <div style={{ padding: '12px 14px 16px' }}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#1A1A1A', opacity: 0.75, lineHeight: 1.6 }}>Olympics-themed brand content for Postal.io — tying a trending cultural moment to the brand's voice on LinkedIn.</p>
              </div>
            </div>

            <div style={{ background: '#fff', border: '2.5px solid #1A1A1A', boxShadow: '4px 4px 0 #1E9020', overflow: 'hidden', transform: 'rotate(1deg)' }}>
              <div style={{ background: '#D2F4D2', padding: '10px 14px', borderBottom: '2px solid #1A1A1A' }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#1E9020', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Postal.io × Kin Candles</span>
              </div>
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7228773103919607810?compact=1" style={{ width: '100%', height: 300, border: 'none', display: 'block' }} title="Kin Candles post" allowFullScreen />
              <div style={{ padding: '12px 14px 16px' }}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#1A1A1A', opacity: 0.75, lineHeight: 1.6 }}>National Relaxation Day partnership with Kin Candles — vendor outreach, relationship building, and content that drove LinkedIn engagement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 4 — Creative Direction ══════════════════════ */}
        <section style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: '#1A1A1A' }}>Creative Direction</h2>
            <div style={{ background: '#1A1A1A', border: '2px solid #1A1A1A', padding: '2px 10px', boxShadow: '2px 2px 0 #E35292' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>On & Behind Camera</span>
            </div>
          </div>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: '#1A1A1A', opacity: 0.8, lineHeight: 1.7, maxWidth: 620, marginBottom: 28 }}>
            I've worked on and behind the scenes of film and photo shoots — both as a subject and as the person ideating, styling, and directing. Each of the projects below involved collaboration on makeup, styling, poses, location, and general aesthetic.
          </p>

          {/* The Cover Up — uses cover-up.jpg (cast photo) */}
          <div style={{
            background: '#fff',
            border: '2.5px solid #1A1A1A',
            boxShadow: '4px 4px 0 #E35292',
            overflow: 'hidden',
            marginBottom: 28,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            transform: 'rotate(-0.5deg)',
          }} className="cover-up-grid">
            <div style={{ position: 'relative', minHeight: 280, overflow: 'hidden' }}>
              <Image
                src="/photos/cover-up.jpg"
                alt="The Cover Up cast"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ background: '#E35292', border: '1.5px solid #1A1A1A', padding: '2px 8px', display: 'inline-block', marginBottom: 10, width: 'fit-content' }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Film</span>
              </div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: '#1A1A1A', marginBottom: 8, lineHeight: 1.2 }}>The Cover Up</h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#1A1A1A', opacity: 0.8, lineHeight: 1.65, marginBottom: 10 }}>
                I worked as a PA and an actress in this film (despite my questionable acting skills). A fun project that let me contribute both in front of and behind the camera.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#1A1A1A', opacity: 0.65, lineHeight: 1.6 }}>
                Spearheaded by the up-and-coming production company{' '}
                <a href="https://www.instagram.com/roomforcreamfilms" target="_blank" rel="noopener noreferrer" style={{ color: '#E35292', fontWeight: 600, textDecoration: 'none' }}>
                  Room for Cream
                </a>
                {' '}and their amazing team.
              </p>
            </div>
          </div>

          {/* Photo grid — no editorial captions, just photographer credit */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 28 }}>
            {creativePhotos.map((photo, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '2.5px solid #1A1A1A',
                padding: '8px 8px 32px 8px',
                boxShadow: `4px 4px 0 ${['#E35292', '#1E9020', '#B32D56', '#1A1A1A'][i]}`,
                transform: `rotate(${photo.rotate}deg)`,
              }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '2/3', overflow: 'hidden' }}>
                  <Image
                    src={photo.src}
                    alt={`Photo by ${photo.photographer}`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
                <div style={{ marginTop: 8, textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#1A1A1A', opacity: 0.5 }}>
                    📷{' '}
                    <a href={photo.photographerUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#E35292', textDecoration: 'none', fontWeight: 700 }}>
                      {photo.photographer}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="rose-card" style={{ padding: '24px 28px', maxWidth: 680 }}>
            <div className="washi" style={{ width: 70, top: -10, left: 20, transform: 'rotate(-1.5deg)' }} />
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: '#1A1A1A', lineHeight: 1.75 }}>
              With each of these projects, I had a say in the ideation for makeup, styling, poses, location, and overall aesthetic. Getting the chance to collaborate with like-minded creatives is one of the things that makes me most excited to create every day.
            </p>
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .cover-up-grid { grid-template-columns: 1fr !important; }
          .spec-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
