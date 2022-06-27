import ProjectInfoCard from '@/components/walletConnect/ProjectInfoCard'
import ProposalSelectSection from '@/components/walletConnect/ProposalSelectSection'
import RequesDetailsCard from '@/components/walletConnect/RequestDetalilsCard'
import RequestMethodCard from '@/components/walletConnect/RequestMethodCard'
import RequestModalContainer from '@/components/walletConnect/RequestModalContainer'
import { COSMOS_MAINNET_CHAINS, TCosmosChain } from '@/data/COSMOSData'
import { EIP155_CHAINS, TEIP155Chain } from '@/data/EIP155Data'
import { SOLANA_CHAINS, TSolanaChain } from '@/data/SolanaData'
import ModalStore from '@/store/ModalStore'
import { cosmosAddresses } from '@/utils/CosmosWalletUtil'
import { eip155Addresses } from '@/utils/EIP155WalletUtil'
import { isCosmosChain, isEIP155Chain, isSolanaChain } from '@/utils/HelperUtil'
import { solanaAddresses } from '@/utils/SolanaWalletUtil'
import { walletConnectClient } from '@/utils/WalletConnectUtil'
import { Text } from '@nextui-org/react'
import { Fragment, useState } from 'react'

export default function SessionProposalModal() {
  const [selectedEIP155, setSelectedEip155] = useState<string[]>([])
  const [selectedCosmos, setSelectedCosmos] = useState<string[]>([])
  const [selectedSolana, setSelectedSolana] = useState<string[]>([])
  const allSelected = [...selectedEIP155, ...selectedCosmos, ...selectedSolana]

  // Get proposal data and wallet address from store
  const proposal = ModalStore.state.data?.proposal

  // Ensure proposal is defined
  if (!proposal) {
    return <Text>Missing proposal data</Text>
  }

  // Get required proposal data
  const { proposer, permissions, relay } = proposal
  const { chains } = permissions.blockchain
  const { methods } = permissions.jsonrpc

  // Add / remove address from EIP155 selection
  function onSelectEIP155(address: string) {
    if (selectedEIP155.includes(address)) {
      const newAddresses = selectedEIP155.filter(a => a !== address)
      setSelectedEip155(newAddresses)
    } else {
      setSelectedEip155([...selectedEIP155, address])
    }
  }

  // Add / remove address from Cosmos selection
  function onSelectCosmos(address: string) {
    if (selectedCosmos.includes(address)) {
      const newAddresses = selectedCosmos.filter(a => a !== address)
      setSelectedCosmos(newAddresses)
    } else {
      setSelectedCosmos([...selectedCosmos, address])
    }
  }

  // Add / remove address from Solana selection
  function onSelectSolana(address: string) {
    if (selectedSolana.includes(address)) {
      const newAddresses = selectedSolana.filter(a => a !== address)
      setSelectedSolana(newAddresses)
    } else {
      setSelectedSolana([...selectedSolana, address])
    }
  }

  // Hanlde approve action
  async function onApprove() {
    if (proposal) {
      const accounts = allSelected
      const response = {
        state: {
          accounts
        }
      }
      await walletConnectClient.approve({ proposal, response })
    }
    ModalStore.close()
  }

  // Hanlde reject action
  async function onReject() {
    if (proposal) {
      await walletConnectClient.reject({ proposal })
    }
    ModalStore.close()
  }

  return (
    <Fragment>
      <RequestModalContainer title="Session Proposal">
        <div className='col-span-2 min-h-[32rem] py-6 px-12'>
          <div className='divide-y divide-[#ffffff26]'>

            <ProjectInfoCard metadata={proposer.metadata} />

            <RequesDetailsCard chains={chains} protocol={relay.protocol} />

            <RequestMethodCard methods={methods} />

            {chains.map(chain => {
              if (isEIP155Chain(chain)) {
                return (
                  <ProposalSelectSection
                    key={chain}
                    name={EIP155_CHAINS[chain as TEIP155Chain]?.name}
                    addresses={eip155Addresses}
                    selectedAddresses={selectedEIP155}
                    onSelect={onSelectEIP155}
                    chain={chain}
                  />
                )
              } else if (isCosmosChain(chain)) {
                return (
                  <ProposalSelectSection
                    key={chain}
                    name={COSMOS_MAINNET_CHAINS[chain as TCosmosChain]?.name}
                    addresses={cosmosAddresses}
                    selectedAddresses={selectedCosmos}
                    onSelect={onSelectCosmos}
                    chain={chain}
                  />
                )
              } else if (isSolanaChain(chain)) {
                return (
                  <ProposalSelectSection
                    key={chain}
                    name={SOLANA_CHAINS[chain as TSolanaChain]?.name}
                    addresses={solanaAddresses}
                    selectedAddresses={selectedSolana}
                    onSelect={onSelectSolana}
                    chain={chain}
                  />
                )
              }
            })}
      
          </div>
        </div>

        <div className='grid grid-cols-2 px-6'>
          <div className='pb-8 w-full flex justify-center pr-2'>
            <button onClick={onReject} className="focus:outline-none focus:ring-0 w-64 text-[#FF5C59] bg-[#B72C4226] border border-[#B72C42] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#B72C42cc] font-bold rounded-xl text-sm py-3 px-3 mt-3" type="submit">Reject</button>
          </div>
          <div className='pb-8 w-full flex justify-center pr-2'>
            <button onClick={onApprove} disabled={!allSelected.length} className="focus:outline-none focus:ring-0 w-64 text-[#000] bg-[#02FF63] border border-[#02FF63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02FF63cc] font-bold rounded-xl text-sm py-3 px-3 mt-3" type="submit">Approve</button>
          </div>
        </div>
      </RequestModalContainer>
    </Fragment>
  )
}
