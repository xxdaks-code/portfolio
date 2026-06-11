interface FilmStripProps {
  frames?: string[] // label text per frame
  title?: string
}

const FRAME_COLORS = ['#D98C9A', '#6F8FAF', '#B5525C', '#1F2A44', '#9BB5A0']

export default function FilmStrip({ frames = [], title }: FilmStripProps) {
  const displayFrames = frames.length > 0 ? frames : ['', '', '', '']

  return (
    <div style={{ position: 'relative', userSelect: 'none' }}>
      {title && (
        <p style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 13,
          color: 'rgba(255,255,255,0.5)',
          textAlign: 'center',
          marginBottom: 4,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          {title}
        </p>
      )}
      <div style={{
        background: '#1A1A1A',
        padding: '10px 18px',
        display: 'flex',
        gap: 4,
        position: 'relative',
      }}>
        {/* Perforations left */}
        <div style={{
          position: 'absolute',
          left: 4,
          top: 0,
          bottom: 0,
          width: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          paddingTop: 6,
          paddingBottom: 6,
        }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{
              width: 6,
              height: 8,
              background: 'rgba(255,255,255,0.18)',
              borderRadius: 1,
            }} />
          ))}
        </div>

        {/* Frames */}
        {displayFrames.map((f, i) => (
          <div key={i} style={{
            width: 80,
            height: 70,
            background: FRAME_COLORS[i % FRAME_COLORS.length],
            opacity: 0.85,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: '0 4px 6px',
            flexShrink: 0,
          }}>
            {f && (
              <span style={{
                fontFamily: "'Caveat', cursive",
                fontSize: 11,
                color: 'rgba(255,255,255,0.8)',
                textAlign: 'center',
                lineHeight: 1.2,
              }}>
                {f}
              </span>
            )}
          </div>
        ))}

        {/* Perforations right */}
        <div style={{
          position: 'absolute',
          right: 4,
          top: 0,
          bottom: 0,
          width: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          paddingTop: 6,
          paddingBottom: 6,
        }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{
              width: 6,
              height: 8,
              background: 'rgba(255,255,255,0.18)',
              borderRadius: 1,
            }} />
          ))}
        </div>
      </div>
    </div>
  )
}
