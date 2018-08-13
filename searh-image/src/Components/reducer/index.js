import { combineReducers } from 'redux';
import input from './inputReducer';
import mass from './massReducer';

const rootReducer = combineReducers({
    input,
    mass,
})

export default rootReducer;