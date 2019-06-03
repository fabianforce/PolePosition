import {combineReducers} from 'redux'//no premite comvinar varios reducers
import MenuItemsReducers from './menuItemsReducers'

export default combineReducers({
    superheros: MenuItemsReducers //the states
})