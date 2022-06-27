import { truncate } from '@/utils/HelperUtil'
import { Card, Checkbox, Row, Text } from '@nextui-org/react'

/**
 * Types
 */
interface IProps {
  address: string
  index: number
  selected: boolean
  onSelect: () => void
}

/**
 * Component
 */
export default function AccountSelectCard({ address, selected, index, onSelect }: IProps) {
  return (
    <div 
      className='grid grid-cols-4 p-4 my-4 mt-3 rounded-xl bg-[#232323] border border-[#383838]'
      onClick={onSelect}
      key={address}
    >
      <input title='1' type="checkbox" checked={selected} className='mt-[0.1rem] rounded-sm text-[#02FF6380] ring-[#02FF6380] accent-[#02FF6380] bg-[#00000000] border border-[#ffffff]' name={`Account${index + 1}`} value={address} />
      <h1 className='text-sm text-right col-span-3 select-none'><label htmlFor={`Account${index + 1}`}>{`${truncate(address, 14)} - Account ${index + 1}`}</label></h1>
    </div>
  )
}
