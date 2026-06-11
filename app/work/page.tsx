import PageNav from '@/components/PageNav'

const films = [
  { title: 'Faces of Death', type: 'Theatrical Release', color: '#E35292', poster: '/posters/films/faces-of-death.jpg' },
  { title: 'Storm Rider: Legend of Hammerhead', type: 'Theatrical Release', color: '#1A1A1A', poster: '/posters/films/storm-rider.jpg' },
  { title: 'The Dreadful', type: 'Horror', color: '#B32D56', poster: '/posters/films/the-dreadful.webp' },
  { title: 'Edie Arnold Is a Loser', type: 'Festival Circuit', color: '#1E9020', poster: '/posters/films/edie-arnold.avif' },
]

const services = [
  { num: '01', title: 'Press Day Coordination', color: '#E35292', body: 'Managing press days start to finish — interview schedules, talent availability, running virtual and in-person sessions, and keeping everything on track from first interview to final recording.' },
  { num: '02', title: 'Press Outreach & Asset Distribution', color: '#1E9020', body: 'Distributing trailers, stills, posters, clips, and campaign updates to industry contacts and media outlets, ensuring new assets reach the right audiences at the right time.' },
  { num: '03', title: 'Coverage Tracking & Reporting', color: '#B32D56', body: 'Using Critical Mention and Muck Rack to monitor coverage, identify media placements, maintain press lists, and compile reports that measure campaign visibility and performance.' },
  { num: '04', title: 'Red Carpets & Screenings', color: '#E35292', body: 'From guest check-in and ticketing to photographer coordination and talent flow, supporting premiere events and screenings while creating a seamless experience for attendees, press, and talent.' },
]

export default function WorkPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <PageNav />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* ── Header ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: 36 }}>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontWeight: 400,
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            marginBottom: 12,
          }}>
            Work<br /><span style={{ color: '#E35292', fontStyle: 'italic' }}>Experience.</span>
          </h1>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 }}>
            <span className="badge badge-pink">5+ Films</span>
            <span className="badge badge-dark">25+ Press Days</span>
            <span className="badge badge-mint">6+ Red Carpets</span>
            <span className="badge badge-berry">Tribeca · SXSW</span>
          </div>
        </div>

        {/* ── Resume download ─────────────────────────────────────── */}
        <div style={{ marginBottom: 48 }}>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vRLJQ5SlxTQxBWe-AhxVEHWKACVr1QpbnvqolH767cSMw-3Uw52MVn9-qJsjUYYDVvFsbV2z6ItFP--/pub"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 14,
              background: '#1A1A1A',
              color: '#fff',
              border: '2.5px solid #1A1A1A',
              padding: '12px 24px',
              textDecoration: 'none',
              boxShadow: '3px 3px 0 #E35292',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>↓</span> View My Resume
          </a>
        </div>

        {/* ── Film Publicity Section ──────────────────────────────── */}
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: '#1A1A1A', marginBottom: 16 }}>
          Film Publicity
        </h2>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
          {['Tribeca Film Festival', 'SXSW', 'People', 'Screen Rant', 'Bloody Disgusting'].map(b => (
            <span key={b} style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 13,
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#B32D56',
              border: '1.5px solid #B32D56',
              padding: '3px 12px',
            }}>{b}</span>
          ))}
        </div>

        {/* Film posters — no text below */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 56 }}>
          {films.map((f, i) => (
            <div key={f.title} style={{
              border: '2.5px solid #1A1A1A',
              boxShadow: `5px 5px 0 ${f.color}`,
              transform: `rotate(${[-1, 1, -0.5, 1.5][i]}deg)`,
              overflow: 'hidden',
            }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '2/3' }}>
                <img src={f.poster} alt={f.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                {/* Type badge */}
                <div style={{ position: 'absolute', top: 8, left: 8, background: f.color, padding: '3px 8px', border: '1.5px solid #1A1A1A' }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{f.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── How I Support Campaigns ─────────────────────────────── */}
        <div style={{ background: '#1A1A1A', border: '2.5px solid #1A1A1A', padding: '40px 32px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(24px, 4vw, 36px)', color: '#fff', marginBottom: 8 }}>
            How I Support Campaigns
          </h2>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#E35292', letterSpacing: '0.1em', marginBottom: 32 }}>// Four Core Pillars</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {services.map(s => (
              <div key={s.title} style={{ border: `2px solid ${s.color}`, padding: '20px 18px' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: s.color, marginBottom: 8, letterSpacing: '0.06em' }}>{s.num}</div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
