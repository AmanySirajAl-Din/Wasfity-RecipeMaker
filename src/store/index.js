import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import langReducer from './reducers/langReducer'
import thunk from 'redux-thunk'

const store = createStore(
  langReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
