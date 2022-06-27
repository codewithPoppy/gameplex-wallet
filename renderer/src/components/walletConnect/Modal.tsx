import ModalStore from '@/store/ModalStore'
import SessionProposalModal from '@/views/walletConnectModals/SessionProposalModal'
import SessionSendTransactionModal from '@/views/walletConnectModals/SessionSendTransactionModal'
import SessionSignCosmosModal from '@/views/walletConnectModals/SessionSignCosmosModal'
import SessionRequestModal from '@/views/walletConnectModals/SessionSignModal'
import SessionSignSolanaModal from '@/views/walletConnectModals/SessionSignSolanaModal'
import SessionSignTypedDataModal from '@/views/walletConnectModals/SessionSignTypedDataModal'
import SessionUnsuportedMethodModal from '@/views/walletConnectModals/SessionUnsuportedMethodModal'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useSnapshot } from 'valtio'

export default function Modal() {
  const { open, view } = useSnapshot(ModalStore.state)

  return (
    <Transition appear show={open} as={Fragment}>
      {(ref) => (
      <Dialog as="div" className="relative z-20" onClose={ModalStore.close}>
        <Transition.Child
          ref={ref}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Background Blur */}
          <div className="fixed inset-0 backdrop-blur-sm bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              ref={ref}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {view === 'SessionProposalModal' && <SessionProposalModal />}
              {view === 'SessionSignModal' && <SessionRequestModal />}
              {view === 'SessionSignTypedDataModal' && <SessionSignTypedDataModal />}
              {view === 'SessionSendTransactionModal' && <SessionSendTransactionModal />}
              {view === 'SessionUnsuportedMethodModal' && <SessionUnsuportedMethodModal />}
              {view === 'SessionSignCosmosModal' && <SessionSignCosmosModal />}
              {view === 'SessionSignSolanaModal' && <SessionSignSolanaModal />}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
      )}
    </Transition>
      
    
  )
}
