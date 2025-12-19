export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Brain shape with playful elements */}
      <g>
        {/* Brain outline */}
        <path
          d="M100 40C75 40 55 55 55 75C55 80 56 85 58 89C52 92 48 98 48 105C48 115 56 123 66 123C68 123 70 122.5 72 122C72 135 75 145 82 152C89 159 98 163 108 163C118 163 127 159 134 152C141 145 144 135 144 122C146 122.5 148 123 150 123C160 123 168 115 168 105C168 98 164 92 158 89C160 85 161 80 161 75C161 55 141 40 116 40C110 40 105 41 100 43C98 41 95 40 100 40Z"
          fill="url(#brainGradient)"
          stroke="#6366F1"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Puzzle pieces overlay - representing cognitive assessment */}
        <circle cx="85" cy="80" r="12" fill="#EC4899" opacity="0.9" />
        <circle cx="115" cy="75" r="12" fill="#F59E0B" opacity="0.9" />
        <circle cx="95" cy="110" r="12" fill="#10B981" opacity="0.9" />
        <circle cx="120" cy="105" r="12" fill="#3B82F6" opacity="0.9" />
        
        {/* Neural connections */}
        <path
          d="M85 80 L115 75 M115 75 L120 105 M85 80 L95 110 M95 110 L120 105"
          stroke="#6366F1"
          strokeWidth="2"
          strokeDasharray="3 3"
          opacity="0.5"
        />
        
        {/* AI sparkle elements */}
        <circle cx="140" cy="65" r="3" fill="#FCD34D" />
        <circle cx="148" cy="58" r="2" fill="#FCD34D" />
        <circle cx="70" cy="55" r="3" fill="#FCD34D" />
        <circle cx="62" cy="62" r="2" fill="#FCD34D" />
      </g>
      
      <defs>
        <linearGradient id="brainGradient" x1="48" y1="40" x2="168" y2="163">
          <stop offset="0%" stopColor="#E0E7FF" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
      </defs>
    </svg>
  );
}
