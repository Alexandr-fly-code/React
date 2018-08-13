import axios from 'axios';
export const gallery = (data) => ({
    type: 'DOWNLOADED',
    data, 
})

const API_KEY = '5018958-ed49ccd90878e6614abdf24a6';
const END_POINT = 'https://pixabay.com/api/?key=';


function getGallery () {
    return axios.get(`${END_POINT}${API_KEY}&category=food&order=popular&per_page=10`);
}

export const galleryAsync = () => dispatch => {
    getGallery()
    .then(data => dispatch(gallery(data.data.hits)))
} 