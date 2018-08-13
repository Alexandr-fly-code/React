import {combineReducers} from 'redux';// для того чтобы собрать все reduce
import counter from './counterReducer';
import gallery from './galleryReducer';

const rootReducer = combineReducers({
    counter: counter,
    gallery,
})
export default rootReducer;
