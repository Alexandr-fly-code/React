import moment from 'moment';

const now = moment();
export default function navigationCalendar (state = now, action) {
    let today = state.clone();

    switch(action.type){
        case 'NEXT' :
        return today.add(1, 'M');
        case 'PREV' :
        return today.subtract(1, 'M');
        default: return state;
    }
}