import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import { Block } from './types';

export const blocks: Block[] = Array.from({ length: 100 })
  .map(() => ({
    id: uuidv4(),
    height: faker.number.int({ min: 1000000, max: 9999999 }),
    date: faker.date.recent(),
    transactions: faker.number.int({ min: 0, max: 30 }),
  }))
  .toSorted((a, b) => b.date.getTime() - a.date.getTime());
