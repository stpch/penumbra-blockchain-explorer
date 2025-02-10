export interface Block {
  date: Date;
  height: number;
  id: string;
  proposer: string;
  transactions: number;
}

export interface Transaction {
  blockHeight: number;
  date: Date;
  hash: string;
  id: string;
  latestAction: string;
  totalActions: number;
}
