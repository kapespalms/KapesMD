import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  size?: number;
}

/**
 * Personal brand mark for KristenPalmerMD.com.
 * Three offset blocks — visually related to FISCMAK's lattice DNA,
 * but distinct from the FISCMAK product logo / full lattice visual.
 */
const BrandMark = ({ className, size = 32 }: BrandMarkProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("flex-shrink-0", className)}
      aria-hidden="true"
    >
      {/* Top block — charcoal */}
      <rect x="2" y="2" width="12" height="12" rx="2" className="fill-foreground" />
      {/* Bottom-left block — warm gold */}
      <rect x="2" y="18" width="12" height="12" rx="2" className="fill-secondary" />
      {/* Bottom-right block — muted teal accent */}
      <rect x="18" y="18" width="12" height="12" rx="2" className="fill-primary" />
    </svg>
  );
};

export default BrandMark;