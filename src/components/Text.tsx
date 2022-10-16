import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'L' | 'M' | 'S';
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ size = 'M', children, asChild }: TextProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={clsx(
        "text-on-surface-primary font-sans",
        {
          'text-base-L': size === 'L',
          'text-base-M': size === 'M',
          'text-base-S': size === 'S'
        }
      )}

    >
      {children}
    </Comp>
  );
}