import * as React from 'react';
import { useEffect, useState, useRef } from 'react';

import { cn } from '@utils';

export interface BlockEditorProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const BlockEditor = React.forwardRef<HTMLInputElement, BlockEditorProps>(({ className, value, ...props }, ref) => {
  const [inputWidth, setInputWidth] = useState('auto');

  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth > 0 ? `${spanRef.current.offsetWidth}px` : '2px';
      setInputWidth(width);
    }
  }, [value]);

  return (
    <>
      <span className="invisible absolute" ref={spanRef}>
        {value}
      </span>
      <input
        type="text"
        value={value}
        className={cn(
          'flex w-full border-none bg-transparent uppercase focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        style={{ width: inputWidth }}
        size={1}
        {...props}
      />
    </>
  );
});
BlockEditor.displayName = 'BlockEditor';

export { BlockEditor };
