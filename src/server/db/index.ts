import Dexie, { type EntityTable } from 'dexie';
import { z } from 'zod';

import { BlockSchema } from './schema';

type Block = z.infer<typeof BlockSchema>;

const indexedDb = new Dexie('FlooowDatabase') as Dexie & {
  blocks: EntityTable<Block, 'id'>;
};

indexedDb.version(1).stores({
  blocks: 'id, name, color'
});

export { indexedDb };
