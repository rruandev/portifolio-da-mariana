export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path
        d="M10 8 H38 M24 8 V40 M14 40 H34"
        stroke="url(#logo-grad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
