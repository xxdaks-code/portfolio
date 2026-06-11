import Link from 'next/link'
import PageNav from '@/components/PageNav'

function Barcode() {
  const bars = [3,1,2,1,3,2,1,2,3,1,2,1,2,3,1,2,1,3,2,1,2,1,3,2,1,3,1,2,1,2]
  return (
    <div style={{ display: 'flex', gap: 2, alignItems: 'stretch', height: 40 }}>
      {bars.map((w, i) => (
        <div key={i} style={{ width: w * 2, background: '#1E9020', flexShrink: 0 }} />
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── Name header ──────────────────────────────────────────── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          background: '#E35292',
          border: '2px solid #1A1A1A',
          padding: '4px 14px',
          boxShadow: '2px 2px 0 #1A1A1A',
        }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 800, color: '#fff' }}>
            Sarah Daks
          </span>
        </div>
      </div>

      {/* ── Page nav ─────────────────────────────────────────────── */}
      <PageNav />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '48px 24px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32,
        alignItems: 'start',
      }} className="hero-grid">

        <div>
          <div style={{ marginBottom: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span className="badge badge-dark">Los Angeles</span>
            <span className="badge badge-pink">Branding</span>
            <span className="badge badge-mint">Events</span>
            <span className="badge badge-berry">Content</span>
          </div>

          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(52px, 8vw, 96px)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            marginBottom: 16,
          }}>
            Sarah<br />
            <span style={{ color: '#E35292', fontStyle: 'italic' }}>Daks.</span>
          </h1>

          <p style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            fontStyle: 'italic',
            color: '#B32D56',
            marginBottom: 24,
            lineHeight: 1.4,
          }}>
            Branding · Events · Content · Creative Direction
          </p>

          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 16,
            color: '#1A1A1A',
            lineHeight: 1.7,
            maxWidth: 400,
            marginBottom: 32,
            opacity: 0.85,
          }}>
            Recent Cal Poly grad and MBA candidate based in Los Angeles, building brands, coordinating events, and creating content at the intersection of strategy and storytelling.
          </p>

          <Link href="/contact" style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 14,
            background: '#fff',
            color: '#1A1A1A',
            border: '2.5px solid #1A1A1A',
            padding: '10px 24px',
            textDecoration: 'none',
            boxShadow: '3px 3px 0 #1A1A1A',
            display: 'inline-block',
          }}>
            Get In Touch
          </Link>
        </div>

        {/* Receipt card */}
        <div style={{ position: 'relative', paddingTop: 20 }} className="hero-right">
          <div style={{
            background: '#E35292',
            border: '2.5px solid #1A1A1A',
            padding: '14px 18px',
            boxShadow: '4px 4px 0 #1A1A1A',
            transform: 'rotate(2deg)',
            position: 'absolute',
            top: -10, right: 20,
            zIndex: 5,
            width: 130,
          }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: '#fff', lineHeight: 1 }}>MBA</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', marginTop: 2 }}>Cal Poly · 2026</div>
          </div>

          <div className="receipt receipt-zigzag-top receipt-zigzag-bottom" style={{ marginTop: 40, padding: '28px 24px', border: '2px solid #1E9020' }}>
            <div style={{ textAlign: 'center', marginBottom: 20, borderBottom: '1px dashed #1E9020', paddingBottom: 16 }}>
              <div style={{ fontFamily: "'Playball', cursive", fontSize: 26, color: '#1E9020', marginBottom: 4 }}>Sarah Daks</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#1E9020', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Creative Marketer · Los Angeles, CA</div>
            </div>
            {[
              { item: 'Brand Strategy', val: '★★★★★' },
              { item: 'Event Coordination', val: '★★★★★' },
              { item: 'Content Creation', val: '★★★★★' },
              { item: 'Creative Direction', val: '★★★★★' },
              { item: 'Film Publicity', val: '★★★★★' },
            ].map(r => (
              <div key={r.item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8, gap: 8 }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#1A1A1A', textTransform: 'uppercase' }}>{r.item}</span>
                <span style={{ flex: 1, borderBottom: '1px dotted #1E9020', margin: '0 6px', marginBottom: 3 }} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#1E9020', fontWeight: 700 }}>{r.val}</span>
              </div>
            ))}
            <div style={{ borderTop: '2px solid #1E9020', marginTop: 16, paddingTop: 12, marginBottom: 16, textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#1E9020', letterSpacing: '0.08em', textTransform: 'uppercase' }}>* Thank You For Your Interest *</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}><Barcode /></div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: '#1E9020', textAlign: 'center', letterSpacing: '0.2em' }}>sarahpdaks@gmail.com</div>
          </div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────────────── */}
      <div style={{ background: '#1A1A1A', borderTop: '2px solid #1A1A1A', borderBottom: '2px solid #1A1A1A', padding: '11px 0', overflow: 'hidden', margin: '48px 0 0' }}>
        <div style={{ display: 'flex', gap: 40, animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 800, letterSpacing: '0.06em', color: '#fff', display: 'flex', gap: 40, alignItems: 'center' }}>
              <span style={{ color: '#E35292' }}>✦</span><span>Brand Strategy</span>
              <span style={{ color: '#D2F4D2' }}>✦</span><span>Event Coordination</span>
              <span style={{ color: '#E35292' }}>✦</span><span>Content Creation</span>
              <span style={{ color: '#D2F4D2' }}>✦</span><span>Creative Direction</span>
              <span style={{ color: '#E35292' }}>✦</span><span>Film Publicity</span>
              <span style={{ color: '#D2F4D2' }}>✦</span><span>Side by Side Design</span>
              <span style={{ color: '#E35292' }}>✦</span><span>Los Angeles</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .hero-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; } .hero-right { display: none; } }
      `}</style>
    </div>
  )
}
