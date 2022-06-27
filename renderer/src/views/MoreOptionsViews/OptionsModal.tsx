import PairingsOptionsModal from '@/views/MoreOptionsViews/PairingsOptionsModal'
import SessionsOptionsModal from '@/views/MoreOptionsViews/SessionsOptionsModal'
import OptionsModalStore from '@/store/OptionsModalStore'
import { useSnapshot } from 'valtio'


export default function OptionsModal(){
    const { open, view } = useSnapshot(OptionsModalStore.state)

    return (
        <>
        {view === 'SessionsOptionsModal' && <SessionsOptionsModal />}
        {view === 'PairingsOptionsModal' && <PairingsOptionsModal />}
        </>
    )
}