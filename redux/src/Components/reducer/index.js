import {combineReducers} from 'redux';// для того чтобы собрать все reduce
import counter from './counterReducer';

const rootReducer = combineReducers({
    counter: counter,
})
export default rootReducer;
