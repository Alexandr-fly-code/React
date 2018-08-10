const initialMass = [];
export default function inputReducers (state = initialMass, action){
    switch(action.type){
        case 'ADD_ITEMS':
        return [action.data, ...state]
        case 'DELETE_ITEMS':
        return state.filter(el => el.id !== action.itemsId)
        default: return state;
    }
}

// if (this.state.inputValue !== ''){
//     this.setState(prev => ({
//         mass: [obj, ...prev.mass],
//         inputValue: '',
//     }))
// } else {
//     alert('Введена пустая строка!');
// }