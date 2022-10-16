export interface LinkProps {
  children: string;
  url: string;
}

export function Link({ children, url, ...rest }: LinkProps) {
  return (
    <a
      href={url}
      className="text-on-surface-primary hover:text-accent-primary text-base-M font-sans no-underline after:content-[''] relative after:absolute after:bg-outline-secondary after:hover:bg-accent-primary after:w-full after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px]"
      {...rest}
    >
      {children}
    </a>
  );
}