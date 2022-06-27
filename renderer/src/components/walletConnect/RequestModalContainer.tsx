import { Dialog } from '@headlessui/react'
import { ReactNode } from 'react'

/**
 * Types
 */
interface IProps {
  title: string
  children: ReactNode | ReactNode[]
}

/**
 * Component
 */
export default function RequestModalContainer({ children, title }: IProps) {
  return (
    <Dialog.Panel className="w-full max-w-[30rem] transform overflow-hidden rounded-xl bg-[#1e1e1e] border border-[#383838] text-left align-middle shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all">
      <Dialog.Title
        as="h1"
        className="text-white text-lg font-bold text-center bg-[#232323] py-6 px-3 rounded-xl w-100"
      >
        {title}
      </Dialog.Title>
    
        {children}

    </Dialog.Panel>
  )
}
