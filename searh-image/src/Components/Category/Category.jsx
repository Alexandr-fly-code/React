import React from 'react';
import './Category.css';
import { connect } from 'react-redux';
import {resultAnimal, resultNature, resultScience, resultPeople} from '../action/massAction';

const Category = ({resultAnimal, resultNature, resultScience, resultPeople}) => {
    return (
        <div className='category'>
            <button className='btn-category' onClick={resultAnimal}>Animals</button>
            <button className='btn-category' onClick={resultNature}>Nature</button>
            <button className='btn-category' onClick={resultScience}>Science</button>
            <button className='btn-category' onClick={resultPeople}>People</button>
        </div>
    );
};

function mDTP (dispatch) {
    return {
        resultAnimal: function () {
            dispatch(resultAnimal())
        },
        resultNature: function () {
            dispatch(resultNature())
        },
        resultScience: function () {
            dispatch(resultScience())
        },
        resultPeople: function () {
            dispatch(resultPeople())
        }
    }
}


export default connect(null, mDTP)(Category);