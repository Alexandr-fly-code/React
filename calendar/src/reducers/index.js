import { combineReducers } from 'redux';
import navigation from './navigationCalendarReducer';
import days from './daysReducer';

const rootReducers = combineReducers ({
    now: navigation,
    days: days,
})

export default rootReducers;
