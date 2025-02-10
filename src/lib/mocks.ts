import { faker } from '@faker-js/faker';
// import { v4 as uuidv4 } from 'uuid';
import { Block, Transaction } from './types';
import { shortenHash } from './utils';

export const blocks: Block[] = Array.from({ length: 100 })
  .map(() => ({
    // id: uuidv4(),
    id: 'foo',
    height: faker.number.int({ min: 1000000, max: 9999999 }),
    date: faker.date.recent(),
    transactions: faker.number.int({ min: 0, max: 30 }),
    proposer:
      'penumbravalid' +
      faker.finance.bitcoinAddress({ type: 'bech32', network: 'testnet' }).slice(0, 7) +
      '...',
  }))
  .toSorted((a, b) => b.date.getTime() - a.date.getTime());

export const transactions: Transaction[] = Array.from({ length: 100 })
  .map(() => {
    return {
      // id: uuidv4(),
      id: 'foo',
      hash: shortenHash(faker.finance.bitcoinAddress({ type: 'bech32', network: 'testnet' })),
      blockHeight: faker.number.int({ min: 1000000, max: 9999999 }),
      date: faker.date.recent(),
      latestAction: faker.helpers.arrayElement([
        'delegate',
        'undelegate',
        'swap claim',
        'undelegate claim',
        'schedule a dutch auction',
        'end a dutch auction',
        'withdraw from a dutch auction',
        'ics20 withdrawal',
      ]),
      totalActions: faker.number.int({ min: 1, max: 15 }),
    };
  })
  .toSorted((a, b) => b.date.getTime() - a.date.getTime());
