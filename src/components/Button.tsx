import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
  variant: 'primary' | 'secondary';
  fullWidth: boolean;
  children: ReactNode;
}

export function Button({ children, variant = 'primary', fullWidth = false }: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 py-3.5 rounded-lg flex items-center justify-center gap-1",
        "border border-outline-accent-primary",
        "font-sans font-semibold leading-none text-base-M",
        {
          "bg-accent-primary": variant === 'primary',
          "hover:bg-accent-over": variant === 'primary',
          "text-on-accent": variant === 'primary',
          "bg-accent-surface": variant === 'secondary',
          "hover:bg-accent-surface-over": variant === 'secondary',
          "text-accent-primary": variant === 'secondary',
          "w-full ": fullWidth
        }
      )}

    >
      {children}
    </button>
  );
}