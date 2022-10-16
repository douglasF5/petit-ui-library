import { clsx } from 'clsx';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from './Icons';
import { useState } from 'react';

//ROOT
export interface CheckboxProps { }

export function Checkbox({ }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxPrimitive.Root
      className={clsx(
        "w-5 h-5 border border-t-outline-secondary border-outline-primary focus-within:border-accent-primary focus-within:ring-4 ring-focus-ring focus-within:outline-none rounded fill-on-accent",
        "flex items-center justify-center",
        {
          "bg-surface-primary": !isChecked,
          "bg-accent-primary": isChecked
        }
      )}
      onCheckedChange={(checked) => setIsChecked(!!checked)}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}