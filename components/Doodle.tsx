interface DoodleProps {
  type: 'star' | 'arrow-right' | 'arrow-down' | 'underline' | 'circle' | 'asterisk' | 'squiggle'
  color?: string
  size?: number
  style?: React.CSSProperties
  className?: string
}

export default function Doodle({ type, color = '#D98C9A', size = 24, style, className }: DoodleProps) {
  const props = { width: size, height: size, fill: 'none', stroke: color, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

  if (type === 'star') return (
    <svg viewBox="0 0 24 24" {...props} style={style} className={className}>
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  )

  if (type === 'asterisk') return (
    <svg viewBox="0 0 24 24" {...props} style={style} className={className}>
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
      <line x1="18.4" y1="5.6" x2="5.6" y2="18.4" />
    </svg>
  )

  if (type === 'arrow-right') return (
    <svg viewBox="0 0 36 20" width={size * 1.5} height={size * 0.8} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" style={style} className={className}>
      <path d="M2 10 Q12 8 28 10" />
      <path d="M22 4 L30 10 L22 16" />
    </svg>
  )

  if (type === 'arrow-down') return (
    <svg viewBox="0 0 20 36" width={size * 0.7} height={size * 1.5} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" style={style} className={className}>
      <path d="M10 2 Q8 14 10 28" />
      <path d="M4 22 L10 30 L16 22" />
    </svg>
  )

  if (type === 'underline') return (
    <svg viewBox="0 0 80 8" width={80} height={8} fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" style={style} className={className}>
      <path d="M2 4 Q20 2 40 5 Q60 8 78 4" />
    </svg>
  )

  if (type === 'circle') return (
    <svg viewBox="0 0 40 40" width={size * 1.5} height={size * 1.5} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" style={style} className={className}>
      <path d="M20 4 Q36 4 36 20 Q36 36 20 36 Q4 36 4 20 Q4 6 18 4" />
    </svg>
  )

  if (type === 'squiggle') return (
    <svg viewBox="0 0 100 16" width={100} height={16} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" style={style} className={className}>
      <path d="M2 8 Q12 2 22 8 Q32 14 42 8 Q52 2 62 8 Q72 14 82 8 Q92 2 98 8" />
    </svg>
  )

  return null
}
