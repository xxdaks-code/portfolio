import PageNav from '@/components/PageNav'

export default function EventsPage() {
  const roles = [
    { icon: '🤝', title: 'Client & Vendor Liaison', color: '#1E9020', body: 'Serving as the communication hub between clients, vendors, and event teams, managing schedules, deliveries, and keeping everyone aligned from first contact to final breakdown.' },
    { icon: '🎪', title: 'Day-of Coordination', color: '#E35292', body: 'On the ground for event setup, production timelines, and guest experience, proactively resolving issues in fast-paced environments so nothing falls through the cracks.' },
    { icon: '📲', title: 'Event Content Creation', color: '#B32D56', body: 'Creating photo, video, and social content that captures the energy of live events.' },
    { icon: '📋', title: 'Run-of-Show & Logistics', color: '#E35292', body: 'Building run-of-show documents, coordinating with venues and vendors, tracking RSVPs, and managing the operational details that make an event actually work.' },
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      <PageNav />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span className="badge badge-mint">Side by Side Design</span>
            <span className="badge badge-pink">Event Coordination</span>
            <span className="badge badge-dark">Content Creation</span>
          </div>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontWeight: 400,
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            marginBottom: 12,
          }}>
            Bringing<br />Ideas Into<br /><span style={{ color: '#1E9020', fontStyle: 'italic' }}>The Room.</span>
          </h1>
        </div>

        {/* Intro */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 28, marginBottom: 56, alignItems: 'start' }} className="events-intro-grid">
          <div className="receipt receipt-zigzag-top receipt-zigzag-bottom" style={{ padding: '28px 24px', border: '2px solid #1E9020' }}>
            <div style={{ fontFamily: "'Playball', cursive", fontSize: 22, color: '#1E9020', marginBottom: 14, textAlign: 'center', borderBottom: '1px dashed #1E9020', paddingBottom: 12 }}>Side by Side Design</div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, lineHeight: 1.75, color: '#1A1A1A', marginBottom: 14 }}>
              I work with <strong>Side by Side Design</strong> across a range of events: from bar and bat mitzvahs to weddings and family gatherings. My role spans coordination and content creation, making sure everything runs smoothly while also capturing the moments that make each event memorable.
            </p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, lineHeight: 1.75, color: '#1A1A1A' }}>
              The dual role of being both on the ground and behind the camera means I understand events from the inside out, which makes the content more authentic.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, paddingTop: 8 }}>
            {[
              { t: 'Weddings', s: 1 },
              { t: 'Bar & Bat Mitzvahs', s: 2 },
              { t: 'Family Gatherings', s: 1 },
              { t: 'Day-of Logistics', s: 2 },
              { t: 'Guest Experience', s: 1 },
              { t: 'Vendor Relations', s: 2 },
              { t: 'Run of Show', s: 1 },
              { t: 'Event Content', s: 2 },
              { t: 'Recap Videos', s: 1 },
            ].map((t, i) => (
              <span key={t.t} style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                padding: '5px 12px',
                border: '2px solid #1A1A1A',
                background: t.s === 1 ? '#D2F4D2' : '#FCE8E6',
                color: t.s === 1 ? '#1E9020' : '#B32D56',
                transform: `rotate(${(i % 5 - 2) * 1}deg)`,
                display: 'inline-block',
                boxShadow: '2px 2px 0 #1A1A1A',
              }}>{t.t}</span>
            ))}
          </div>
        </div>

        {/* Instagram Reel */}
        <section style={{ marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: '#1A1A1A' }}>Event Content</h2>
            <div style={{ background: '#D2F4D2', border: '2px solid #1E9020', padding: '2px 10px', boxShadow: '2px 2px 0 #1E9020' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#1E9020', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Video</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ background: '#fff', border: '2.5px solid #1A1A1A', boxShadow: '4px 4px 0 #1E9020', overflow: 'hidden', transform: 'rotate(-1deg)', maxWidth: 340 }}>
              <div style={{ background: '#D2F4D2', padding: '10px 14px', borderBottom: '2px solid #1A1A1A' }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#1E9020', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Side by Side Design · Instagram Reel</span>
              </div>
              <iframe src="https://www.instagram.com/reel/DT-nx7mkZkH/embed" style={{ width: '100%', height: 480, border: 'none', display: 'block' }} title="Side by Side Design event reel" allowFullScreen scrolling="no" />
              <div style={{ padding: '12px 14px 16px' }}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#1A1A1A', opacity: 0.75, lineHeight: 1.6 }}>Event content created for Side by Side Design — capturing the energy and details that make each gathering memorable.</p>
              </div>
            </div>

            <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="brutal-card-pink" style={{ padding: '22px 20px' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>// The Dual Role</div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: '#fff', lineHeight: 1.65 }}>Being both coordinator and content creator means I understand what moments matter — and I'm ready to capture them when they happen.</p>
              </div>
              <div className="rose-card" style={{ padding: '20px 18px' }}>
                <div className="washi" style={{ width: 60, top: -10, left: 16, transform: 'rotate(-2deg)' }} />
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#B32D56', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>// What I Handle</div>
                {['Client & vendor communication', 'Event setup & production timelines', 'Guest experience & flow', 'Social content & recap videos', 'Run-of-show management'].map((item, i) => (
                  <div key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#B32D56', marginBottom: 6, paddingLeft: 14, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>→</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dark pillars */}
        <div style={{ background: '#1A1A1A', border: '2.5px solid #1A1A1A', padding: '40px 32px' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(22px, 3.5vw, 36px)', color: '#fff', marginBottom: 8 }}>What I Bring to Events</h2>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#1E9020', letterSpacing: '0.1em', marginBottom: 28 }}>// Four Core Areas</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {roles.map(r => (
              <div key={r.title} style={{ border: `2px solid ${r.color}`, padding: '20px 18px' }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{r.icon}</div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>{r.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 720px) { .events-intro-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
