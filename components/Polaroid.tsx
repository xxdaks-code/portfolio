import { CSSProperties } from 'react'

interface PolaroidProps {
  caption?: string
  rotate?: number
  style?: CSSProperties
  children?: React.ReactNode
  color?: string // bg color for placeholder image
  width?: number
  height?: number
  label?: string
}

export default function Polaroid({
  caption,
  rotate = 0,
  style,
  children,
  color = '#D98C9A',
  width = 180,
  height = 160,
  label,
}: PolaroidProps) {
  return (
    <div
      style={{
        background: '#fff',
        padding: '10px 10px 38px 10px',
        boxShadow: '2px 4px 14px rgba(0,0,0,0.14), 0 1px 3px rgba(0,0,0,0.08)',
        display: 'inline-block',
        transform: `rotate(${rotate}deg)`,
        position: 'relative',
        ...style,
      }}
    >
      {/* Image area */}
      <div
        style={{
          width,
          height,
          background: color,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {children || (
          <span style={{
            fontFamily: "'Caveat', cursive",
            color: 'rgba(255,255,255,0.6)',
            fontSize: 13,
            textAlign: 'center',
            padding: 8,
          }}>
            {label || '📷'}
          </span>
        )}
      </div>

      {/* Caption */}
      {caption && (
        <p style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 15,
          color: '#1A1A1A',
          textAlign: 'center',
          marginTop: 6,
          lineHeight: 1.3,
        }}>
          {caption}
        </p>
      )}
    </div>
  )
}
