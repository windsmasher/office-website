import React from 'react';

export type TherapyFormIconVariant =
  | 'individual'
  | 'group'
  | 'family'
  | 'couple';

type TherapyFormIconProps = {
  variant: TherapyFormIconVariant;
  className?: string;
};

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const TherapyFormIcon: React.FC<TherapyFormIconProps> = ({
  variant,
  className,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={true}
    >
      {variant === 'individual' && (
        <>
          <circle cx="12" cy="8" r="3.5" {...stroke} />
          <path d="M6 20.5 Q12 12.5 18 20.5" {...stroke} />
        </>
      )}
      {variant === 'group' && (
        <>
          <circle cx="6" cy="10" r="2" {...stroke} />
          <path d="M3 20.5 Q6 14.5 9 20.5" {...stroke} />
          <circle cx="12" cy="9" r="2.25" {...stroke} />
          <path d="M8 20.5 Q12 14 16 20.5" {...stroke} />
          <circle cx="18" cy="10" r="2" {...stroke} />
          <path d="M15 20.5 Q18 14.5 21 20.5" {...stroke} />
        </>
      )}
      {variant === 'family' && (
        <>
          <circle cx="7.5" cy="8" r="2.5" {...stroke} />
          <path d="M4 20.5 Q7.5 13 11 20.5" {...stroke} />
          <circle cx="12" cy="12.5" r="1.75" {...stroke} />
          <path d="M9.5 20.5 Q12 17 14.5 20.5" {...stroke} />
          <circle cx="16.5" cy="8" r="2.5" {...stroke} />
          <path d="M13 20.5 Q16.5 13 20 20.5" {...stroke} />
        </>
      )}
      {variant === 'couple' && (
        <>
          <circle cx="8.5" cy="9" r="2.75" {...stroke} />
          <path d="M5 20.5 Q8.5 14 12 20.5" {...stroke} />
          <circle cx="15.5" cy="9" r="2.75" {...stroke} />
          <path d="M12 20.5 Q15.5 14 19 20.5" {...stroke} />
        </>
      )}
    </svg>
  );
};
