import { cn } from '@utils';

interface HeadingProps {
  children: React.ReactNode;
  as: React.ElementType;
  className?: string;
}

export function Heading({ children, as: As = 'h1', className }: HeadingProps) {
  return <As className={cn(className)}>{children}</As>;
}
