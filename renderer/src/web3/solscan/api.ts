const fetcher = (action: string, address: string) => fetch(`${process.env.NEXT_PUBLIC_SOLASCAN_API_URL}/${action}?address=${address}`).then(res => res.json())
const transfersFetcher = (action: string, address: string) => fetch(`${process.env.NEXT_PUBLIC_SOLASCAN_API_URL}/${action}?token_address=${address}&type=all&offset=0&limit=10`).then(res => res.json())
const marketFetcher = (action: string, symbol: string) => fetch(`${process.env.NEXT_PUBLIC_SOLASCAN_API_URL}/${action}?symbol=${symbol}`).then(res => res.json())

export const getAccount = async ({ queryKey }) => {
  const [_key, { address }] = queryKey;
  return fetcher('account', address)
};

export const getAccountTransactions = async ({ queryKey }) => {
  const [_key, { address }] = queryKey;
  return fetcher('account/transaction', address)
};

export const getTransfers = async ({ queryKey }) => {
  const [_key, { address }] = queryKey;
  return transfersFetcher('transfer/token', address)
};

export const getTokens = async ({ queryKey }) => {
  const [_key, { address }] = queryKey;
  return fetcher('account/tokens', address);
};

export const getMetadata = async ({ queryKey }) => {
  const [_key, { uri }] = queryKey;
  return fetch(uri).then((res) => res.json());
};

export const getMarket = async ({ queryKey }) => {
  const [_key, { symbol }] = queryKey;
  return marketFetcher('market', symbol);
};
