import { proxy } from 'valtio'

/**
 * Types
 */
interface OptionsModalData {
   modalHeader: string
}

interface State {
  open: boolean
  view?:
    | 'PairingsOptionsModal'
    | 'SessionsOptionsModal'
  data?: OptionsModalData
}

/**
 * State
 */
const state = proxy<State>({
  open: false
})

/**
 * Store / Actions
 */
const OptionsModalStore = {
  state,

  open(view: State['view'], data: State['data']) {
    state.view = view
    state.data = data
    state.open = true
  },

  close() {
    state.open = false
  }
}

export default OptionsModalStore
