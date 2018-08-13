const initialMass = [];
export default function inputReducers (state = initialMass, action){
    switch(action.type){
        case 'ADD_ITEMS':
        return [action.data, ...state]
        case 'DELETE_ITEMS':
        return state.filter(el => el.id !== action.itemsId)
        // case 'ADD_ITEMS':
        // return state.map(el => el[data.boll])
        default: return state;
    }
}
// export default function info (state = [], action){
    // switch(action.type){
        // case 'ADD_ITEMS':
        // return state;
        // default: return state;
    // }
// }

// export  function test (state = initialMass, action){
//     switch(action.type){
//         case 'ADD_ITEMS':
//         return [[1,2,34,5,6,2], ...state]
//     }
// }

// if (this.state.inputValue !== ''){
//     this.setState(prev => ({
//         mass: [obj, ...prev.mass],
//         inputValue: '',
//     }))
// } else {
//     alert('Введена пустая строка!');
// }