import axios from 'axios';

export const getValue = (value) => ({
    type: 'GET_VALUE',
    value,
})

// const END_POINT = 'https://pixabay.com/api/?key=';
// const API_KEY = '5018958-ed49ccd90878e6614abdf24a6';

// function fethes () {
//     return axios.get(`${END_POINT}${API_KEY}&category=food&order=popular&per_page=10`);
// }

// export const get = () => dispatch => {
//     fethes()
//     .then(data => dispatch(getValue(data)))
// }
// console.log(getValue());