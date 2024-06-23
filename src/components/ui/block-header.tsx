'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@utils';

const colorOptions = {
  red: {
    bg: 'bg-red-100',
    text: 'text-red-500'
  },
  yellow: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-500'
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-500'
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-500'
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-500'
  },
  indigo: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-500'
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-500'
  },
  pink: {
    bg: 'bg-pink-100',
    text: 'text-pink-500'
  },
  zinc: {
    bg: 'bg-zinc-100',
    text: 'text-zinc-500'
  },
  stone: {
    bg: 'bg-stone-100',
    text: 'text-stone-500'
  },
  amber: {
    bg: 'bg-amber-100',
    text: 'text-amber-500'
  },
  emerald: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-500'
  },
  teal: {
    bg: 'bg-teal-100',
    text: 'text-teal-500'
  },
  cyan: {
    bg: 'bg-cyan-100',
    text: 'text-cyan-500'
  },
  sky: {
    bg: 'bg-sky-100',
    text: 'text-sky-500'
  },
  violet: {
    bg: 'bg-violet-100',
    text: 'text-violet-500'
  },
  rose: {
    bg: 'bg-rose-100',
    text: 'text-rose-500'
  }
};

type ColorOptions = keyof typeof colorOptions;

interface BlockHeaderProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  color: ColorOptions;
}

const BlockHeader = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, BlockHeaderProps>(
  ({ className, children, color, ...props }, ref) => (
    <AccordionPrimitive.Header
      className={cn('flex flex-1 items-center gap-1 pb-4', colorOptions[color].text, className)}
    >
      <AccordionPrimitive.Trigger ref={ref} className="transition-all [&[data-state=open]>svg]:rotate-180" {...props}>
        <svg
          className="shrink-0 transition-transform duration-200"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 11L2 6H12L7 11Z" fill="#94A3B8" />
        </svg>
      </AccordionPrimitive.Trigger>
      <span className={cn('rounded px-2 py-1 text-xs font-medium uppercase tracking-wide', colorOptions[color].bg)}>
        {children}
      </span>
    </AccordionPrimitive.Header>
  )
);
BlockHeader.displayName = AccordionPrimitive.Trigger.displayName;

export { BlockHeader };
