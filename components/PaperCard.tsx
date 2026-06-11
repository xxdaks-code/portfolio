import { CSSProperties } from 'react'

interface PaperCardProps {
  children: React.ReactNode
  rotate?: number
  style?: CSSProperties
  className?: string
  variant?: 'white' | 'warm' | 'cream' | 'pink' | 'blue' | 'lined' | 'dotted'
  tape?: 'top' | 'corners' | 'none'
  pin?: 'red' | 'blue' | 'pink' | 'none'
  shadow?: boolean
}

const variantColors: Record<string, string> = {
  white: '#FFFFFF',
  warm: '#EDE8DF',
  cream: '#F6F1EA',
  pink: '#F5E8EB',
  blue: '#EBF0F7',
  lined: '#FFFFFF',
  dotted: '#FAFAF8',
}

export default function PaperCard({
  children,
  rotate = 0,
  style,
  className = '',
  variant = 'white',
  tape = 'none',
  pin = 'none',
  shadow = true,
}: PaperCardProps) {
  const bg = variantColors[variant] || '#FFFFFF'

  const tapeStyle: CSSProperties = {
    position: 'absolute',
    background: 'rgba(242, 232, 198, 0.80)',
    zIndex: 10,
    pointerEvents: 'none',
  }

  const pinColors: Record<string, string> = {
    red: '#B5525C',
    blue: '#6F8FAF',
    pink: '#D98C9A',
    none: 'transparent',
  }

  return (
    <div
      className={className}
      style={{
        background: bg,
        border: '1px solid rgba(26,26,26,0.08)',
        boxShadow: shadow ? '2px 3px 10px rgba(0,0,0,0.09)' : 'none',
        transform: `rotate(${rotate}deg)`,
        position: 'relative',
        backgroundImage: variant === 'lined'
          ? 'repeating-linear-gradient(transparent, transparent 24px, rgba(26,26,26,0.06) 24px, rgba(26,26,26,0.06) 25px)'
          : variant === 'dotted'
          ? 'radial-gradient(circle, rgba(26,26,26,0.07) 1px, transparent 1px)'
          : 'none',
        backgroundSize: variant === 'lined' ? '100% 25px' : variant === 'dotted' ? '18px 18px' : 'auto',
        ...style,
      }}
    >
      {/* Tape — top center */}
      {tape === 'top' && (
        <div style={{
          ...tapeStyle,
          height: 22,
          width: 60,
          top: -11,
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: '1px solid rgba(0,0,0,0.04)',
          borderRight: '1px solid rgba(0,0,0,0.04)',
        }} />
      )}

      {/* Tape — corners */}
      {tape === 'corners' && (
        <>
          <div style={{ ...tapeStyle, height: 18, width: 44, top: -10, left: 14, transform: 'rotate(-3deg)' }} />
          <div style={{ ...tapeStyle, height: 18, width: 44, top: -10, right: 14, transform: 'rotate(3deg)' }} />
        </>
      )}

      {/* Pin */}
      {pin !== 'none' && (
        <div style={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: pinColors[pin],
          position: 'absolute',
          top: -7,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          boxShadow: '1px 2px 4px rgba(0,0,0,0.28)',
        }} />
      )}

      {children}
    </div>
  )
}
