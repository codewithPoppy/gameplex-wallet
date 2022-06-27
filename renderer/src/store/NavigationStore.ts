import { proxy } from 'valtio'

/**
 * Types
 */
interface NavigationData {
  name: string
  href: string
  active: boolean
}

interface NavigationDataWrapper {
    [key: string]: NavigationData
}

const initialState: NavigationDataWrapper = {
    MyCollection: {
        name: 'My Collection',
        href: '/home', 
        active: false 
    },
    Activity: {
        name: 'Activity', 
        href: '/activity', 
        active: false 
    },
    Settings: {
        name: 'Settings',
        href: '/settings',
        active: false
    }
}   as NavigationDataWrapper;

type Active = keyof typeof initialState

interface State {
  initialState: NavigationDataWrapper
  active?: Active
  data?: NavigationDataWrapper
}

/**
 * State
 */
const state = proxy<State>({
  initialState: initialState,
  active: '',
  data: initialState
})

/**
 * Store / Actions
 */
const NavigationStore = {
  state,

  active(active: Active) {
    state.active = active
    state.data = {
        ...initialState,
        [active]: {
            ...initialState[active],
            active: true
        }
    }
  },

  inactive() {
    state.active = ''
  }
}

export default NavigationStore
