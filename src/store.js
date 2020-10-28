import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import eventReducer from './reducers/eventReducer'
import loginReducer from './reducers/loginReducer'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'
import applyReducer from './reducers/applyReducer'

const reducer = combineReducers({
	events: eventReducer,
	login: loginReducer,
	notification: notificationReducer,
	users: userReducer,
	applies: applyReducer
})

const store = createStore(reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export default store