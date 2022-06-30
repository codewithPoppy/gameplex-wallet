import Link from 'next/link'
import { SessionTypes } from '@walletconnect/types'

/**
 * Types
 */
interface IProps {
  metadata: SessionTypes.Participant['metadata']
}

/**
 * Components
 */
export default function ProjectInfoCard({ metadata }: IProps) {
  const { icons, name, url } = metadata

  return (
    <div className='flex mb-3'>
      <div className='flex flex-col p-2 justify-center '>
        <img className="w-16 h-16 mx-auto rounded-xl" src={icons[0]} alt="Rounded avatar" />
      </div>
      <div className='flex flex-col pl-3 pt-5 gap gap-1'>
        <h1 className='text-white text-left text-sm'>{name}</h1>
        <Link href={url} className='text-left text-[#d099ff] text-xs'>{url}</Link>
      </div>
    </div>
  )
}
