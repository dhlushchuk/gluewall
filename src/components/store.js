import { createStore, combineReducers } from 'redux'
import { showSidebar, loadPage, changeBackgroundTheme } from './reducers'

const initialState = {
    isShowedSidebar: false,
    isPageOnload: false,
    backgroundTheme: ""
}
const Store = createStore(
    combineReducers({ showSidebar, loadPage, changeBackgroundTheme }),
    (localStorage['redux-store']) ?
        JSON.parse(localStorage['redux-store']) :
        initialState
)
Store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(Store.getState())
})

export default Store