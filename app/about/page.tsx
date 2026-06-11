import Image from 'next/image'
import PageNav from '@/components/PageNav'

function Barcode() {
  const bars = [2,1,3,1,2,3,1,2,1,3,2,1,2,1,3,1,2,3,1,2,1,2,3,1,2,1,3,2,1,2]
  return (
    <div style={{ display: 'flex', gap: 2, alignItems: 'stretch', height: 32 }}>
      {bars.map((w, i) => (
        <div key={i} style={{ width: w * 2, background: '#1E9020', flexShrink: 0 }} />
      ))}
    </div>
  )
}

const movies = [
  { rank: 1, title: '???', year: '????', mystery: true, poster: null },
  { rank: 2, title: '???', year: '????', mystery: true, poster: null },
  { rank: 3, title: 'The Toxic Avenger', year: '2023', mystery: false, poster: '/posters/movies/toxic-avenger.jpg' },
  { rank: 4, title: 'Pitch Perfect', year: '2012', mystery: false, poster: '/posters/movies/pitch-perfect.jpg' },
  { rank: 5, title: "Child's Play", year: '1988', mystery: false, poster: '/posters/movies/chucky.avif' },
]

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <PageNav />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* ── Header ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: 48 }}>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontWeight: 400,
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
          }}>
            About<br /><span style={{ color: '#E35292', fontStyle: 'italic' }}>Me.</span>
          </h1>
        </div>

        {/* ── Profile + Bio ───────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: 36,
          marginBottom: 48,
          alignItems: 'start',
        }} className="about-top-grid">

          {/* Profile photo — polaroid style, no caption */}
          <div style={{
            background: '#fff',
            border: '2.5px solid #1A1A1A',
            padding: '10px 10px 14px 10px',
            boxShadow: '5px 5px 0 #E35292',
            transform: 'rotate(-1.5deg)',
            flexShrink: 0,
          }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
              <Image
                src="/photos/sarah-stool.jpg"
                alt="Sarah Daks"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </div>

          {/* Bio + Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="rose-card" style={{ padding: '28px 28px' }}>
              <div className="washi" style={{ width: 80, top: -10, left: '50%', transform: 'translateX(-50%) rotate(-1deg)' }} />
              <div style={{
                fontFamily: "'Playball', cursive",
                fontSize: 22,
                color: '#B32D56',
                marginBottom: 14,
              }}>
                Hi, I'm Sarah.
              </div>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                lineHeight: 1.75,
                color: '#1A1A1A',
                marginBottom: 14,
              }}>
                I'm a recent graduate living in Los Angeles with varied experience across marketing, branding, and content creation. I'm interested in how <strong style={{ color: '#B32D56' }}>strategy and storytelling</strong> shape strong brand identities, both digitally and through experiential work.
              </p>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                lineHeight: 1.75,
                color: '#1A1A1A',
              }}>
                I have a growing focus on events coordination and bringing creative concepts to life in real-world settings. Whether it's a brand activation, a film press day, or a wedding, I care about the details that make an experience feel intentional.
              </p>
            </div>

            {/* Education receipt — larger font */}
            <div className="receipt receipt-zigzag-top receipt-zigzag-bottom" style={{
              padding: '20px 20px',
              border: '2px solid #1E9020',
            }}>
              <div style={{
                fontFamily: "'Playball', cursive",
                fontSize: 20,
                color: '#1E9020',
                textAlign: 'center',
                marginBottom: 14,
                borderBottom: '1px dashed #1E9020',
                paddingBottom: 10,
              }}>Education</div>

              <div style={{ marginBottom: 14 }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 700, color: '#1A1A1A', textTransform: 'uppercase', marginBottom: 4, lineHeight: 1.4 }}>
                  Masters of Business Administration
                </div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: '#1E9020', marginBottom: 2 }}>
                  California Polytechnic University, SLO
                </div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#1A1A1A', opacity: 0.6 }}>
                  Graduated: June 2025
                </div>
              </div>

              <div style={{ borderTop: '1px dashed #1E9020', paddingTop: 14 }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 700, color: '#1A1A1A', textTransform: 'uppercase', marginBottom: 4, lineHeight: 1.4 }}>
                  B.A. Communication Studies
                </div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: '#1E9020', marginBottom: 2 }}>
                  California Polytechnic University, SLO
                </div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#1A1A1A', opacity: 0.6 }}>
                  Graduated: June 2024
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Skills ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            color: '#1E9020',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: 16,
          }}>// Skills & Focus Areas</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { t: 'Brand Strategy', s: 1 },
              { t: 'Content Creation', s: 2 },
              { t: 'Event Coordination', s: 1 },
              { t: 'Press Days', s: 2 },
              { t: 'Media Relations', s: 1 },
              { t: 'SEO', s: 2 },
              { t: 'Budget Reconciliation', s: 1 },
              { t: 'Video Content', s: 2 },
              { t: 'Red Carpets', s: 1 },
              { t: 'Small Groups Communication', s: 2 },
              { t: 'Creative Direction', s: 1 },
              { t: 'Copywriting', s: 2 },
              { t: 'Social Media Strategy', s: 1 },
              { t: 'Vendor Relations', s: 2 },
            ].map((s, i) => (
              <span key={s.t} style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                padding: '5px 14px',
                border: '2px solid #1A1A1A',
                background: s.s === 1 ? '#E35292' : '#D2F4D2',
                color: s.s === 1 ? '#fff' : '#1E9020',
                transform: `rotate(${(i % 5 - 2) * 0.7}deg)`,
                display: 'inline-block',
                boxShadow: '2px 2px 0 #1A1A1A',
              }}>
                {s.t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Contact + Letterboxd ────────────────────────────────── */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
          {[
            { icon: '✉', label: 'sarahpdaks@gmail.com', href: 'mailto:sarahpdaks@gmail.com', color: '#E35292', bg: '#fff' },
            { icon: '⬡', label: 'linkedin.com/in/sarahdaks', href: 'https://www.linkedin.com/in/sarahdaks/', color: '#1E9020', bg: '#D2F4D2' },
            { icon: '🎬', label: 'Letterboxd: @sdaks', href: 'https://letterboxd.com/sdaks/', color: '#B32D56', bg: '#FCE8E6' },
            { icon: '◎', label: 'Los Angeles, CA', href: null, color: '#1A1A1A', bg: '#fff' },
          ].map(item => (
            <div key={item.label} style={{
              background: item.bg,
              border: '2px solid #1A1A1A',
              padding: '10px 16px',
              boxShadow: '3px 3px 0 #1A1A1A',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <span style={{ color: item.color, fontSize: 16 }}>{item.icon}</span>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  color: item.color,
                  textDecoration: 'none',
                  fontWeight: 700,
                }}>{item.label}</a>
              ) : (
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* ── Top Five Movies ─────────────────────────────────────── */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            marginBottom: 24,
            flexWrap: 'wrap',
          }}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 32,
              fontWeight: 800,
              color: '#1A1A1A',
            }}>Top Five Movies</h2>
            <div style={{
              background: '#E35292',
              border: '2px solid #1A1A1A',
              padding: '3px 12px',
              boxShadow: '2px 2px 0 #1A1A1A',
            }}>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 9,
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>You'll Have To Ask Me About #1 & #2 👀</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {movies.map((movie) => (
              <div key={movie.rank} style={{
                width: 140,
                transform: `rotate(${(movie.rank % 3 - 1) * 1.5}deg)`,
              }}>
                <div style={{
                  background: '#fff',
                  border: '2.5px solid #1A1A1A',
                  padding: '8px 8px 28px 8px',
                  boxShadow: movie.mystery ? '4px 4px 0 #E35292' : '4px 4px 0 #1A1A1A',
                }}>
                  <div style={{
                    width: '100%',
                    height: 180,
                    background: movie.mystery ? '#E35292' : '#1A1A1A',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {movie.mystery ? (
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 48, fontWeight: 800, color: '#fff', lineHeight: 1 }}>?</div>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>Ask Me</div>
                      </div>
                    ) : (
                      <img src={movie.poster!} alt={movie.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )}
                  </div>
                  <div style={{ marginTop: 8, textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: '#E35292', textTransform: 'uppercase', letterSpacing: '0.1em' }}>#{movie.rank}</div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 800, color: '#1A1A1A', marginTop: 2, lineHeight: 1.3 }}>
                      {movie.mystery ? '???' : movie.title}
                    </div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#1A1A1A', opacity: 0.5, marginTop: 1 }}>{movie.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 720px) {
          .about-top-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
