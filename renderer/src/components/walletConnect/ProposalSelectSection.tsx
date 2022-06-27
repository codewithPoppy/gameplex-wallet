import AccountSelectCard from '@/components/walletConnect/AccountSelectCard'

/**
 * Types
 */
interface IProps {
  name: string
  chain: string
  addresses: string[]
  selectedAddresses: string[]
  onSelect: (address: string) => void
}

/**
 * Component
 */
export default function ProposalSelectSection({
  name,
  addresses,
  selectedAddresses,
  chain,
  onSelect
}: IProps) {
  return (
    <div className='mb-3'>
      <h1 className='mt-3 text-sm'>{`Select ${name} Accounts`}</h1>
      {addresses.map((address, index) => (
        <AccountSelectCard
          key={`${address}-${index}`}
          address={address}
          index={index}
          onSelect={() => onSelect(`${chain}:${address}`)}
          selected={selectedAddresses.includes(`${chain}:${address}`)}
        />
      ))}
    </div>
  )
}
