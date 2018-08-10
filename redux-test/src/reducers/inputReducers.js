const initialText = '';
export default function inputReducers (state = initialText, action){
    switch (action.type){
        case 'CHANGE':
        return action.value;
        default: return '';
    }
}