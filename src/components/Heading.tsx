import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: 'L' | 'M' | 'S';
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = 'M', children, asChild }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      className={clsx(
        "text-on-surface-primary font-semibold font-sans",
        {
          'text-heading-L': size === 'L',
          'text-heading-M': size === 'M',
          'text-heading-S': size === 'S'
        }
      )}

    >
      {children}
    </Comp>
  );
}