'use client';

interface BorderBeamProps {
  duration?: number;
  size?: number;
  color?: string;
}

export default function BorderBeam({
  duration = 6,
  size = 200,
  color = 'rgba(16,185,129,0.6)',
}: BorderBeamProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
      style={{
        padding: '1px',
        mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
        maskComposite: 'exclude',
        WebkitMaskComposite: 'xor',
      }}
    >
      <div
        className="absolute inset-[-1px] rounded-[inherit]"
        style={{
          background: `conic-gradient(from var(--border-beam-angle, 0deg), transparent 80%, ${color})`,
          animation: `border-beam-spin ${duration}s linear infinite`,
        }}
      />
    </div>
  );
}
