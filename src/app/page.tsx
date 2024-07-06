'use client';

import { useEffect, useRef } from 'react';

import { Today } from '@components';
import { indexedDb } from '@db';
import { ColorOptions } from '@types';

export default function Home() {
  const isInitialRender = useRef(true);

  async function addInitialBlocks() {
    try {
      const id = await indexedDb.blocks.bulkAdd([
        { id: 'morning', name: 'Morning', color: 'orange' as ColorOptions },
        { id: 'afternoon', name: 'Afternoon', color: 'blue' as ColorOptions },
        { id: 'evening', name: 'Evening', color: 'violet' as ColorOptions }
      ]);
    } catch (error) {
      console.log(error);
    }
  }

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
