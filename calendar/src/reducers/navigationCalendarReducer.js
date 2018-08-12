import moment from 'moment';

const now = moment();
export default function navigationCalendar (state = now, action) {
    switch(action.type){
        case 'NEXT' :
        return action.today.add(1, 'M');
        case 'PREV' :
        return action.today.subtract(1, 'M');
        default: return state;
    }
}