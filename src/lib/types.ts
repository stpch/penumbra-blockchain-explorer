export interface Block {
  id: string;
  height: number;
  date: Date;
  transactions: number;
  proposer: string;
}

export interface Transaction {
  id: string;
  hash: string;
  blockHeight: number;
  date: Date;
  latestAction: string;
  totalActions: number;
}
