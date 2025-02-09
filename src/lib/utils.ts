export const shortenHash = (hash: string) =>
  hash.length < 16 ? hash : `${hash.slice(0, 8)}...${hash.slice(-8)}`;
