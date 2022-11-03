import {applyMiddleware, combineReducers, createStore} from 'redux'
import {appPortFolioReducer} from './AppPortFolioReducer'
import thunk from "redux-thunk";

const reducers = combineReducers({
    portfolio: appPortFolioReducer,
})

export const store = createStore(reducers,applyMiddleware(thunk))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
