import {createStore} from 'redux';
import rootReducer from '../Components/reducer/index';
const store = createStore(rootReducer)

export default store;