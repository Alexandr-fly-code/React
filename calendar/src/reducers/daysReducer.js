const massDays = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI','SAT'];
export default function daysFromCalandar (state = massDays, action) {
    switch(action.type){
        case 'DAYS':
        return state;
        default: return state;
    }
}