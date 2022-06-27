import { COSMOS_MAINNET_CHAINS, TCosmosChain } from '@/data/COSMOSData'
import { EIP155_CHAINS, TEIP155Chain } from '@/data/EIP155Data'
import { SOLANA_CHAINS, TSolanaChain } from '@/data/SolanaData'

/**
 * Types
 */
interface IProps {
  chains: string[]
  protocol: string
}

/**
 * Component
 */
export default function RequesDetailsCard({ chains, protocol }: IProps) {
  return (
  <>
    <div className='mb-4'>
      <h1 className='mt-4 text-sm'>Blockchain (s)</h1>
      <h1 className='mt-2 text-xs opacity-50'>
      {chains
        .map(
          chain =>
            EIP155_CHAINS[chain as TEIP155Chain]?.name ??
            COSMOS_MAINNET_CHAINS[chain as TCosmosChain]?.name ??
            SOLANA_CHAINS[chain as TSolanaChain]?.name ??
            chain
        )
        .join(', ')}
      </h1>
    </div>
    
    <div className='mb-4'>
      <h1 className='mt-4 text-sm'>Relay Protocal</h1>
      <h1 className='mt-2 text-xs opacity-50'>{protocol}</h1>
    </div>
  </>
  )
}
