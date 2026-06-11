'use client'
import { useState } from 'react'
import PageNav from '@/components/PageNav'

function Barcode() {
  const bars = [2,1,3,1,2,1,3,2,1,2,3,1,2,1,2,3,1,2,1,3,2,1,2]
  return (
    <div style={{ display: 'flex', gap: 2, alignItems: 'stretch', height: 32 }}>
      {bars.map((w, i) => (
        <div key={i} style={{ width: w * 2, background: '#1E9020', flexShrink: 0 }} />
      ))}
    </div>
  )
}

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    fontFamily: "'Space Mono', monospace",
    fontSize: 13,
    color: '#1A1A1A',
    background: '#D2F4D2',
    border: '2px solid #1A1A1A',
    borderRadius: 0,
    outline: 'none',
    boxSizing: 'border-box' as const,
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <PageNav />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontWeight: 400,
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            marginBottom: 12,
          }}>
            Let's<br /><span style={{ color: '#E35292', fontStyle: 'italic' }}>Talk.</span>
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32, alignItems: 'start' }} className="contact-grid">

          {/* Left — contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="receipt receipt-zigzag-top receipt-zigzag-bottom" style={{ padding: '24px 20px', border: '2px solid #1E9020' }}>
              <div style={{ fontFamily: "'Playball', cursive", fontSize: 28, color: '#1E9020', textAlign: 'center', marginBottom: 16, borderBottom: '1px dashed #1E9020', paddingBottom: 12 }}>
                Sarah Daks
              </div>
              {[
                { icon: '✉', label: 'sarahpdaks@gmail.com', href: 'mailto:sarahpdaks@gmail.com', color: '#E35292' },
                { icon: '⬡', label: 'linkedin.com/in/sarahdaks', href: 'https://www.linkedin.com/in/sarahdaks/', color: '#1E9020' },
                { icon: '🎬', label: 'Letterboxd: @sdaks', href: 'https://letterboxd.com/sdaks/', color: '#B32D56' },
                { icon: '◎', label: 'Los Angeles, CA', href: null, color: '#1A1A1A' },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: item.color, fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", fontSize: 15, color: item.color, textDecoration: 'none', fontWeight: 700 }}>{item.label}</a>
                  ) : (
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 15, color: item.color, fontWeight: 700 }}>{item.label}</span>
                  )}
                </div>
              ))}
              <div style={{ marginTop: 16, borderTop: '1px solid #1E9020', paddingTop: 12 }}>
                <Barcode />
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="receipt receipt-zigzag-top receipt-zigzag-bottom" style={{ padding: '48px 32px', textAlign: 'center', border: '2px solid #1E9020' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✉️</div>
                <div style={{ fontFamily: "'Playball', cursive", fontSize: 28, color: '#1E9020', marginBottom: 10 }}>Message Received!</div>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#1A1A1A', opacity: 0.7, lineHeight: 1.6, textTransform: 'uppercase' }}>
                  Thanks for reaching out.<br />Sarah will be in touch soon.
                </p>
                <div style={{ marginTop: 20 }}><Barcode /></div>
              </div>
            ) : (
              <div style={{ background: '#fff', border: '2.5px solid #1A1A1A', boxShadow: '5px 5px 0 #E35292', padding: '32px 28px' }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, color: '#1A1A1A', marginBottom: 24 }}>
                  Send a Message
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#1A1A1A', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>Your Name</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="First Last" style={inputStyle} />
                  </div>

                  <div>
                    <label style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#1A1A1A', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>Email</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" style={inputStyle} />
                  </div>

                  <div>
                    <label style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#1A1A1A', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>Message</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Say hello..." style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
                  </div>

                  <button type="submit" style={{
                    background: '#E35292',
                    color: '#fff',
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 16,
                    fontWeight: 800,
                    padding: '12px 28px',
                    border: '2.5px solid #1A1A1A',
                    cursor: 'pointer',
                    boxShadow: '3px 3px 0 #1A1A1A',
                    alignSelf: 'flex-start',
                    transition: 'transform 0.1s, box-shadow 0.1s',
                  }}
                    onMouseEnter={e => { (e.target as HTMLButtonElement).style.transform = 'translate(-1px,-1px)'; (e.target as HTMLButtonElement).style.boxShadow = '4px 4px 0 #1A1A1A' }}
                    onMouseLeave={e => { (e.target as HTMLButtonElement).style.transform = 'translate(0,0)'; (e.target as HTMLButtonElement).style.boxShadow = '3px 3px 0 #1A1A1A' }}
                  >
                    Send It →
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        input:focus, textarea:focus { border-color: #E35292 !important; box-shadow: 0 0 0 3px rgba(227,82,146,0.15); }
        @media (max-width: 720px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
