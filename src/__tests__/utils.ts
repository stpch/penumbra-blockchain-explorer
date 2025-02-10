/* istanbul ignore file */
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import { Block, Transaction } from '../lib/types';

export const generateBlock = (): Block => ({
  id: uuidv4(),
  height: faker.number.int({ min: 1000000, max: 9999999 }),
  date: faker.date.recent().toISOString(),
  transactions: faker.number.int({ min: 0, max: 30 }),
  proposer:
    'penumbravalid' +
    faker.finance.bitcoinAddress({ type: 'bech32', network: 'testnet' }).slice(0, 7) +
    '...',
});

export const generateTransaction = (): Transaction => ({
  id: uuidv4(),
  hash: faker.finance.bitcoinAddress({ type: 'bech32', network: 'testnet' }),
  blockHeight: faker.number.int({ min: 1000000, max: 9999999 }),
  date: faker.date.recent().toISOString(),
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
});
