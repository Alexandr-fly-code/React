// export function add (){
//     return {
//         type: 'ADD'
//     }
// }

// export function dec (){
//     return {
//         type: 'DEC'
//     }
// }

// export function reset 

export const add = () => ({type: 'ADD'})
export const dec = () => ({type: 'DEC'})
export const reset = () => ({type: 'RESET'})
export const inAsync = (number) => dispatch => {
    setTimeout(() => {
        dispatch(add(number))
    }, 2000)
}
