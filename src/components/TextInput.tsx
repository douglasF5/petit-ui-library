import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

//ROOT
export interface TextInputRootProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "border border-t-outline-secondary border-outline-primary focus-within:border-accent-primary focus-within:ring-4 ring-focus-ring focus-within:outline-none rounded-lg px-4 fill-on-surface-secondary focus-within:fill-accent-primary",
        "flex items-center gap-2",
        "bg-surface-primary placeholder:text-on-surface-tertiary",
      )}
    >
      {children}
    </div>
  );
}

//INPUT
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }
function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      type='text'
      className="bg-transparent w-full py-3.5 rounded-lg outline-none border-none font-sans text-on-surface-primary leading-none text-base-M font-regular"
      {...props}
    />
  );
}

//INPUT ICON
export interface TextInputIconProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

export function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-5 h-4 text-on-surface-secondary">
      {children}
    </Slot>
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
};