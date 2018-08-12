import {combineReducers} from 'redux'
import inputReducer from './inputReducers';
import addItemsReducer from './addItemsReducer';
import booleanReducer from './trueOrFalseReducers';

const rootReducer = combineReducers({
    text: inputReducer,
    mass: addItemsReducer,
    bool: booleanReducer,
})

export default rootReducer;