import React from 'react';
import ToDooList from './ToDooList';
import './ToDoo.css';
import {connect} from 'react-redux';


const ToDoo = ({data}) => {
    return (
        <div>
            <ul>
                {/* {console.log(this.props)} */}
               {/* {arr.map(el =>  />)} */}
               {data.map(el => <li className='list' key={el.id} >{el.text}<ToDooList id={el.id}/></li>)}
            </ul>
        </div>
    );
};
function mSTP (store){
    return {
        data: store.mass,
    }
}
export default connect(mSTP, null)(ToDoo);