import ProjectInfoCard from '@/components/walletConnect/ProjectInfoCard'
import RequesDetailsCard from '@/components/walletConnect/RequestDetalilsCard'
import RequestMethodCard from '@/components/walletConnect/RequestMethodCard'
import RequestModalContainer from '@/components/walletConnect/RequestModalContainer'
import ModalStore from '@/store/ModalStore'
import { Text } from '@nextui-org/react'
import { Fragment } from 'react'

export default function SessionUnsuportedMethodModal() {
  // Get request and wallet data from store
  const requestEvent = ModalStore.state.data?.requestEvent
  const requestSession = ModalStore.state.data?.requestSession

  // Ensure request and wallet are defined
  if (!requestEvent || !requestSession) {
    return <Text>Missing request data</Text>
  }

  // Get required request data
  const { method } = requestEvent.request

  return (
    <Fragment>
      <RequestModalContainer title="Unsuported Method">
        <div className='col-span-2 min-h-[32rem] py-6 px-12'>
          <div className='divide-y divide-[#ffffff26]'>
            <ProjectInfoCard metadata={requestSession.peer.metadata} />

            <RequesDetailsCard
              chains={[requestEvent.chainId ?? '']}
              protocol={requestSession.relay.protocol}
            />

            <RequestMethodCard methods={[method]} />
          </div>
        </div>

        <div className='col-span-2 pb-8 w-full flex justify-center'>
          <button onClick={ModalStore.close} className="focus:outline-none focus:ring-0 w-64 text-[#FF5C59] bg-[#B72C4226] border border-[#B72C42] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#B72C42cc] font-bold rounded-xl text-sm py-3 px-3 mt-3" type="submit">
            Close
          </button>
        </div>
      </RequestModalContainer>
    </Fragment>
  )
}
