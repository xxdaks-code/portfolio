'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About Me' },
  { href: '/creative', label: 'Creative Projects' },
  { href: '/events',   label: 'Events' },
  { href: '/work',     label: 'Work Experience' },
  { href: '/contact',  label: 'Contact' },
]

export default function PageNav() {
  const pathname = usePathname()
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 24px 0' }}>
      <nav style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        border: '2.5px solid #1A1A1A',
        boxShadow: '4px 4px 0 #1A1A1A',
        overflow: 'hidden',
      }}>
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            className={`page-nav-link${pathname === l.href ? ' active' : ''}`}
            style={{
              borderRight: i < links.length - 1 ? '2px solid #1A1A1A' : 'none',
            }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
