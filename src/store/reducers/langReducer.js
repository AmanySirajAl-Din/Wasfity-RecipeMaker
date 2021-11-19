const INITIAL_STATE = 'en'

export default function langReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LANG':
      return action.payload
    case 'GET_LANG':
      return action.payload
    default:
      return state
  }
}
