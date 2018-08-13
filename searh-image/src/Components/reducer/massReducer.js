export default function data (state = [], action){
    switch(action.type){
        case 'DATA':
        return action.mass;
        default: return state;
    }
}