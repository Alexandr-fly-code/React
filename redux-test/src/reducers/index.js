import {combineReducers} from 'redux';
import inputReducer from './inputReducers';
import addItemsReducer from './addItemsReducer';

const rootReducer = combineReducers({
    text: inputReducer,
    mass: addItemsReducer,
})

export default rootReducer;