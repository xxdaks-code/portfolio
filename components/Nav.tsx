'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/work',     label: 'Work' },
  { href: '/creative', label: 'Creative' },
  { href: '/events',   label: 'Events' },
  { href: '/contact',  label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      background: 'rgba(247,229,238,0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '2.5px solid #1A1A1A',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 58,
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            background: '#E35292',
            border: '2px solid #1A1A1A',
            padding: '3px 10px',
            boxShadow: '2px 2px 0 #1A1A1A',
          }}>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 15,
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.01em',
            }}>
              Sarah Daks
            </span>
          </div>
        </Link>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${pathname === l.href ? ' active' : ''}`}
              style={{ textTransform: 'none' }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          style={{
            display: 'none',
            background: '#E35292',
            border: '2px solid #1A1A1A',
            color: '#fff',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 14,
            padding: '4px 12px',
            cursor: 'pointer',
          }}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div style={{
          borderTop: '2px solid #1A1A1A',
          padding: '16px 0 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          background: '#FCE8E6',
        }} className="nav-mobile-menu">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 20,
                fontWeight: 800,
                color: pathname === l.href ? '#E35292' : '#1A1A1A',
                textDecoration: 'none',
                paddingLeft: 24,
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
        @media (min-width: 641px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
