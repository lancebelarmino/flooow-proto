'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@utils';
import { BlockHeader } from './block-header';
import { BlockEditor } from './block-editor';

interface Block
  extends React.ForwardRefExoticComponent<
    (AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) &
      React.RefAttributes<HTMLDivElement>
  > {
  Header: typeof BlockHeader;
  Item: typeof AccordionPrimitive.Item;
  Content: typeof AccordionPrimitive.Content;
  Editor: typeof BlockEditor;
}

const Block = AccordionPrimitive.Root as unknown as Block;

const BlockItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('[&:not(:last-child)]:mb-12', className)} {...props} />
));
BlockItem.displayName = 'BlockItem';

const BlockContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
BlockContent.displayName = AccordionPrimitive.Content.displayName;

Block.Header = BlockHeader;
Block.Item = BlockItem;
Block.Content = BlockContent;
Block.Editor = BlockEditor;

export { Block };
