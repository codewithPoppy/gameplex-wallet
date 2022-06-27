import * as web3 from '@solana/web3.js';

// export const connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');
export const connection = new web3.Connection(process.env.NEXT_PUBLIC_CLUSTER_NODE, 'confirmed');
export const publicKey = new web3.PublicKey(process.env.NEXT_PUBLIC_SOL_PUBLIC_KEY);
