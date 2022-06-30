import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { walletConnectClient } from '@/utils/WalletConnectUtil'
import { ERROR } from '@walletconnect/utils'
import OptionsModalStore from '@/store/OptionsModalStore'
import ProjectInfoCard from '@/components/walletConnect/ProjectInfoCard'
import SessionSelectSection from '@/components/walletConnect/SessionSelectSection'
import { COSMOS_MAINNET_CHAINS, TCosmosChain } from '@/data/COSMOSData'
import { EIP155_CHAINS, TEIP155Chain } from '@/data/EIP155Data'
import { SOLANA_CHAINS, TSolanaChain } from '@/data/SolanaData'
import { cosmosAddresses } from '@/utils/CosmosWalletUtil'
import { eip155Addresses } from '@/utils/EIP155WalletUtil'
import { isCosmosChain, isEIP155Chain, isSolanaChain } from '@/utils/HelperUtil'
import { solanaAddresses } from '@/utils/SolanaWalletUtil'
import { useSnapshot } from 'valtio'


/**
 * Types
 */
interface ISessionsProps {
  session: any
  onDetails: () => Promise<void>
}

interface ISessionDetailsProps {
  session: any
  topic?: string
  onDelete: () => Promise<void>
}


/**
 * Session View Component
 */
function SessionsCard({ session, onDetails }: ISessionsProps) {
  const { icons, name, url } = session.peer.metadata
  return (
    <div className='col-span-2 flex flex-row justify-between bg-[#232323] border border-[#383838] rounded-xl w-100 mb-4'>
      <div className='flex flex-col p-2 justify-center '>
        <img className="w-10 h-10 mx-auto rounded-xl" src={icons[0]} alt="Rounded avatar" />
      </div>
      <div className='flex flex-col p-2 gap gap-1'>
        <h1 className='text-white text-left text-xs'>{name}</h1>
        <a href="#" className='text-left text-[#d099ff] text-xs'>{url}</a>
      </div>
      <div className='flex justify-end'>
        <button type='button' onClick={onDetails} title="Details" className='bg-[#272727] p-3 w-[3rem] rounded-xl'>
          {/*  Click Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="arrow-right" transform="translate(-300 -252)">
              <path d="M0,15.84,6.52,9.32a1.986,1.986,0,0,0,0-2.8L0,0" transform="translate(308.91 256.08)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(324 276) rotate(180)" fill="none" opacity="0" />
            </g>
          </svg>

        </button>
      </div>
    </div>
  )
}


/**
 * Sessions Details View Component
 */
 function SessionsDetailsCard({ session, topic, onDelete }: ISessionDetailsProps) {
  const [updated, setUpdated] = useState(new Date())

  if (!session) {
    return null
  }

  // Get necessary data from session
  const expiryDate = new Date(session.expiry * 1000)
  const { chains } = session.permissions.blockchain
  const { methods } = session.permissions.jsonrpc
  const { accounts } = session.state

  // Handle deletion of a session
  async function onDeleteSession() {
    await walletConnectClient.session.delete({
      topic,
      reason: ERROR.DELETED.format()
    })
    onDelete()
  }

  // Hanlde deletion of session account
  async function onDeleteAccount(account: string) {
    const newAccounts = accounts.filter(a => a !== account)
    await walletConnectClient.session.update({
      topic,
      state: {
        accounts: newAccounts
      }
    })
    setUpdated(new Date())
  }

  // Handle addition of account to the session
  async function onAddAccount(account: string) {
    await walletConnectClient.session.update({
      topic,
      state: {
        accounts: [...accounts, account]
      }
    })
    setUpdated(new Date())
  }

  return (
    <>
    <div className='divide-y divide-[#ffffff26]'>
      
      <ProjectInfoCard metadata={session.peer.metadata} />

      {chains.map(chain => {
        if (isEIP155Chain(chain)) {
          return (
            <SessionSelectSection
              key={chain}
              chain={chain}
              name={EIP155_CHAINS[chain as TEIP155Chain]?.name}
              addresses={eip155Addresses}
              selectedAddresses={accounts}
              onDelete={onDeleteAccount}
              onAdd={onAddAccount}
            />
          )
        } else if (isCosmosChain(chain)) {
          return (
            <SessionSelectSection
              key={chain}
              chain={chain}
              name={COSMOS_MAINNET_CHAINS[chain as TCosmosChain]?.name}
              addresses={cosmosAddresses}
              selectedAddresses={accounts}
              onDelete={onDeleteAccount}
              onAdd={onAddAccount}
            />
          )
        } else if (isSolanaChain(chain)) {
          return (
            <SessionSelectSection
              key={chain}
              chain={chain}
              name={SOLANA_CHAINS[chain as TSolanaChain]?.name}
              addresses={solanaAddresses}
              selectedAddresses={accounts}
              onDelete={onDeleteAccount}
              onAdd={onAddAccount}
            />
          )
        }
      })}

      <div className='mb-4'>
        <h1 className='mt-4 text-sm'>Methods</h1>
        <h1 className='mt-2 text-xs opacity-50'>{methods.map(method => method).join(', ')}</h1>
      </div>
      <div className='mb-4 grid grid-cols-2'>
        <h1 className='mt-4 text-sm'>Expiry</h1>
        <h1 className='mt-4 text-right text-xs opacity-50'>{expiryDate.toDateString()}</h1>
      </div>
      <div className='mb-4 grid grid-cols-2'>
        <h1 className='mt-4 text-sm'>Last Updated</h1>
        <h1 className='mt-4 text-right text-xs opacity-50'>{updated.toDateString()}</h1>
      </div>
    </div>
    <div className='col-span-2 pb-8 w-full flex justify-center'>
      <button onClick={onDeleteSession} className="focus:outline-none focus:ring-0 w-64 text-[#FF5C59] bg-[#B72C4226] border border-[#B72C42] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#B72C42cc] font-bold rounded-xl text-sm py-3 px-3 mt-3" type="submit">Delete Session</button>
    </div>
    </>
  )
}

/**
 * Sessions Empty View Component
 */
function SessionsEmptyCard() {
  return (
    <div className='h-96'>
      <div className='h-full flex'>
        <div className='m-auto'>
          <img className='w-32 h-32 mx-auto my-auto' src='/icons/nosession.svg' alt='QR Code Icon'></img>

          <h1 className='text-center text-sm font-thin'>Nothing here, nothing there…<br /> No sessions added yet</h1>
        </div>
      </div>
    </div>
  )
}


export default function SessionsOptionsModal() {
  const modalHeader = OptionsModalStore.state.data?.modalHeader ?? 'Sessions'
  const { open, view } = useSnapshot(OptionsModalStore.state)

  // Get Sessions Data
  const [sessions, setSessions] = useState(walletConnectClient.session.values)

  const [sessionState, setSessionState] = useState<'sessions' | 'details'>('sessions')

  async function onNext(state: 'sessions' | 'details') {
    console.log('onNext');
    setSessionState(state)
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={() => {OptionsModalStore.close(); setSessionState('sessions');}}>
        <Transition.Child
          as={Fragment}
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
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[30rem] transform overflow-hidden rounded-xl bg-[#1e1e1e] border border-[#383838] text-left align-middle shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all">
                <Dialog.Title
                  as="h1"
                  className="text-white text-lg font-bold text-center bg-[#232323] py-6 px-3 rounded-xl w-100"
                >
                  {modalHeader}
                </Dialog.Title>

                <div className='col-span-2 min-h-[32rem] py-6 px-12'>

                  {/* Sessions */}
                  {sessions.length ? (
                    sessions.map(session => {
                      if(sessionState === 'sessions'){
                        return (
                          <SessionsCard
                            key={session.topic}
                            session={session}
                            onDetails={() => onNext('details')}
                          />
                        )
                      } else if (sessionState === 'details') {
                          return (
                            <SessionsDetailsCard 
                              key={session.topic}
                              session={session}
                              topic={session.topic}
                              onDelete={() => onNext('sessions')}
                              />
                          )
                      }
                    })
                  ) : (
                    /* Empty Sessions */
                    <SessionsEmptyCard/>
                  )}
                  
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}