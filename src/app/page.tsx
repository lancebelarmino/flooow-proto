'use client';

import { useEffect, useRef } from 'react';
import { DexieError } from 'dexie';

import { Today } from '@components';
import { ToastAction, useToast, Button } from '@components/ui';
import { indexedDb } from '@db';
import { ColorOptions } from '@types';

const defaultBlocks = [
  { name: 'Morning', color: 'orange' as ColorOptions },
  { name: 'Afternoon', color: 'blue' as ColorOptions },
  { name: 'Evening', color: 'violet' as ColorOptions }
];

export default function Home() {
  const isInitialRender = useRef(true);

  const { toast } = useToast();

  const addInitialBlocks = async () => {
    try {
      const blocks = await indexedDb.blocks.toArray();

      // Temporarily add blocks using this method, should be on create of account to avoid duplicates
      if (blocks.length === 0) {
        await indexedDb.blocks.bulkAdd(defaultBlocks);
      }
    } catch (_err) {
      const err = _err as DexieError;

      toast({
        variant: 'destructive',
        title: 'Failed to create default blocks',
        description: err.message
      });
    }
  };

  useEffect(() => {
    if (isInitialRender.current) {
      (async () => {
        await addInitialBlocks();
      })();

      isInitialRender.current = false;
    }
  }, []);

  return (
    <main className="grid place-items-center">
      <Today />
    </main>
  );
}
