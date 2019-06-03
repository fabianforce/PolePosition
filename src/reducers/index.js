import {combineReducers} from 'redux'//permite combinar varios reducers
import MenuItemsReducers from './menuItemsReducers'

export default combineReducers({
    bMenuItems: MenuItemsReducers //the states
})