export default function CTPattern({ opacity = 0.04, color = '#5bc4f5' }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <pattern id="ct-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <path
            d="M10 0 L80 0 L80 10 L90 10 L90 90 L80 90 L80 80 L10 80 L10 90 L0 90 L0 10 L10 10 Z"
            fill="none"
            stroke={color}
            strokeWidth="0.8"
            opacity="0.6"
          />
          <rect x="95" y="95" width="20" height="20" fill="none" stroke={color} strokeWidth="0.5" opacity="0.3" />
          <line x1="0" y1="0" x2="8" y2="8" stroke={color} strokeWidth="0.5" opacity="0.4" />
          <line x1="112" y1="112" x2="120" y2="120" stroke={color} strokeWidth="0.5" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ct-pattern)" />
    </svg>
  )
}
