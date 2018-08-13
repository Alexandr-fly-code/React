import axios from 'axios';
export const dataMass = (mass) => ({
    type: 'DATA',
    mass,
})


function inputFetch (query) {
    return axios.get(`${END_POINT}${API_KEY}&category=${query}&q=${query}&image_type=photo`)
}

export const search = (query) => dispatch => {
    inputFetch(query)
    .then(data => dispatch(dataMass(data.data.hits)))
}

const END_POINT = 'https://pixabay.com/api/?key=';
const API_KEY = '5018958-ed49ccd90878e6614abdf24a6';

function fethes (val) {
    return axios.get(`${END_POINT}${API_KEY}&category=${val}&order=popular&per_page=20`);
}

export const gets = () => dispatch => {
    fethes('sports')
    .then(data => dispatch(dataMass(data.data.hits)))
}

export const resultAnimal = () => dispatch => {
    fethes('animals')
    .then(data => dispatch(dataMass(data.data.hits)))
}

export const resultNature = () => dispatch => {
    fethes('nature')
    .then(data => dispatch(dataMass(data.data.hits)))
}
export const resultScience = () => dispatch => {
    fethes('science')
    .then(data => dispatch(dataMass(data.data.hits)))
}

export const resultPeople = () => dispatch => {
    fethes('people')
    .then(data => dispatch(dataMass(data.data.hits)))
}

