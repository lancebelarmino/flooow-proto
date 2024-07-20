import { z } from 'zod';

import { ColorOptions } from '@types';

const BlockSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.nativeEnum(ColorOptions)
});

export type { BlockSchema };
