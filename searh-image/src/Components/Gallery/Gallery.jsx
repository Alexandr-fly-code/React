import React from 'react';
import  './Gallery.css'
import {connect} from 'react-redux'; 
// import { gets, resultAnimal } from './action/massAction';
import {resultAnimal} from '../action/massAction';


const Gallery = ({mass, resultAnimal}) => {
    return (
        <div className='container-gallery'>
        {/* {console.log(mass.map(el => console.log(el.largeImageURL)))} */}
{/* <ul> */}
    {mass.map(el => <img src={el.largeImageURL} className='img' key={el.id} onClick={resultAnimal}/>)}
    {/* <button onClick={resultAnimal}>jjlkkl</button> */}
{/* </ul> */}
            {/* <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/>
            <img src="https://placeimg.com/320/480/any" alt="" className='img'/> */}
            
        </div>
    );
};

function mSTP (store) {
    return {
        mass: store.mass,
    }
}
function mDTP (dispatch) {
    return {
        resultAnimal: function () {
            dispatch(resultAnimal())
        }
    }
}


export default connect(mSTP, mDTP)(Gallery);