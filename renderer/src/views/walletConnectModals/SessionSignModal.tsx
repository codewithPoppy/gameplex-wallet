import ProjectInfoCard from '@/components/walletConnect/ProjectInfoCard'
import RequesDetailsCard from '@/components/walletConnect/RequestDetalilsCard'
import RequestMethodCard from '@/components/walletConnect/RequestMethodCard'
import RequestModalContainer from '@/components/walletConnect/RequestModalContainer'
import ModalStore from '@/store/ModalStore'
import { approveEIP155Request, rejectEIP155Request } from '@/utils/EIP155RequestHandlerUtil'
import { getSignParamsMessage } from '@/utils/HelperUtil'
import { walletConnectClient } from '@/utils/WalletConnectUtil'
import { Button, Col, Divider, Modal, Row, Text } from '@nextui-org/react'
import { Fragment } from 'react'

export default function SessionSignModal() {
  // Get request and wallet data from store
  const requestEvent = ModalStore.state.data?.requestEvent
  const requestSession = ModalStore.state.data?.requestSession

  // Ensure request and wallet are defined
  if (!requestEvent || !requestSession) {
    return <Text>Missing request data</Text>
  }

  // Get required request data
  const { method, params } = requestEvent.request

  // Get message, convert it to UTF8 string if it is valid hex
  const message = getSignParamsMessage(params)

  // Handle approve action (logic varies based on request method)
  async function onApprove() {
    if (requestEvent) {
      const response = await approveEIP155Request(requestEvent)
      await walletConnectClient.respond({
        topic: requestEvent.topic,
        response
      })
      ModalStore.close()
    }
  }

  // Handle reject action
  async function onReject() {
    if (requestEvent) {
      const response = rejectEIP155Request(requestEvent.request)
      await walletConnectClient.respond({
        topic: requestEvent.topic,
        response
      })
      ModalStore.close()
    }
  }

  return (
    <Fragment>
      <RequestModalContainer title="Sign Message">
        <div className='col-span-2 min-h-[32rem] py-6 px-12'>
          <div className='divide-y divide-[#ffffff26]'>
            <ProjectInfoCard metadata={requestSession.peer.metadata} />

            <RequesDetailsCard
              chains={[requestEvent.chainId ?? '']}
              protocol={requestSession.relay.protocol}
            />

            <Row>
              <Col>
                <Text h5>Message</Text>
                <Text color="$gray400">{message}</Text>
              </Col>
            </Row>

            <RequestMethodCard methods={[method]} />
          </div>
        </div>
        
        <div className='grid grid-cols-2 px-6'>
          <div className='pb-8 w-full flex justify-center pr-2'>
            <button onClick={onReject} className="focus:outline-none focus:ring-0 w-64 text-[#FF5C59] bg-[#B72C4226] border border-[#B72C42] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#B72C42cc] font-bold rounded-xl text-sm py-3 px-3 mt-3" type="submit">
              Reject
            </button>
          </div>
          <div className='pb-8 w-full flex justify-center pr-2'>
            <button onClick={onApprove} className="focus:outline-none focus:ring-0 w-64 text-[#000] bg-[#02FF63] border border-[#02FF63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02FF63cc] font-bold rounded-xl text-sm py-3 px-3 mt-3" type="submit">
              Approve
            </button>
          </div>
        </div>
      </RequestModalContainer>
    </Fragment>
  )
}
