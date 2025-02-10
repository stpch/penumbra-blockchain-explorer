export const formatNumber = new Intl.NumberFormat('en-US').format;

export const shortenHash = (hash: string) =>
  hash.length < 19 ? hash : `${hash.slice(0, 8)}...${hash.slice(-8)}`;
