import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 24px',
      textAlign: 'center',
    }}>
      <div>
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 120,
          fontWeight: 800,
          color: '#E35292',
          lineHeight: 1,
          border: '3px solid #1A1A1A',
          padding: '0 24px',
          display: 'inline-block',
          boxShadow: '6px 6px 0 #1A1A1A',
          marginBottom: 24,
        }}>404</div>
        <h2 style={{
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 26,
          fontStyle: 'italic',
          color: '#1A1A1A',
          marginBottom: 8,
        }}>Page not found.</h2>
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          color: '#1A1A1A',
          opacity: 0.5,
          marginBottom: 28,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          LOOKS LIKE THIS PAGE GOT LOST AT A PRESS DAY
        </p>
        <Link href="/" style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: 14,
          textTransform: 'lowercase',
          background: '#E35292',
          color: '#fff',
          border: '2.5px solid #1A1A1A',
          padding: '10px 24px',
          textDecoration: 'none',
          boxShadow: '3px 3px 0 #1A1A1A',
          display: 'inline-block',
        }}>← back home</Link>
      </div>
    </div>
  )
}
