import { ImageResponse } from 'next/og';

export const alt = 'w1r3d.dev — Full-stack Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#0a0a0a',
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div style={{ fontSize: 72, fontWeight: 700, color: '#ffffff' }}>
            w1r3d.dev
          </div>
          <div style={{ fontSize: 32, color: '#34d399' }}>
            Full-stack Engineer
          </div>
          <div style={{ fontSize: 20, color: '#737373', marginTop: '8px' }}>
            Web · Mobile · AI Systems · Game Mods
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
