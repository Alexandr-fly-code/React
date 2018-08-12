export default function bool (state = true, action){
    switch(action.type){
        case 'LOGICAL':
        return !state;
        default: return state;
    }
}