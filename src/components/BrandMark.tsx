export default function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true" className="pc-logo">
      <rect x="3" y="4" width="26" height="19" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M12 28h8M16 23v5M12 10l-3 3 3 3M20 10l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path className="pc-logo-cursor" d="M15 17h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
