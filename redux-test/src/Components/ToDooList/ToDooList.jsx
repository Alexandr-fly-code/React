import React, { Component } from 'react';
import './ToDoo.css';
import {connect} from 'react-redux';
import {deletItems} from '../../action/deleteAction';
import {bool} from '../../action/trueOrFalse';


class ToDooList extends Component {

    deeleted = () => {
        // this.props.deleted()
        console.log(!this.props.bool)
        this.props.deleted(this.props.id)
    }

    // isActiv

    isActiveFalse = () => {
        // return !this.props.bool;
        // console.log(!this.props.bool);
        // console.log('hey')
        
       this.props.bools()
    }

    render() {
        // console.log(this.props);
        const {bool} = this.props;
        return (
            <div>
               {bool ?  
               <div>
                    <input type="text" name='name' className='inputs'/>
                    <button className='btns' onClick={this.isActiveFalse}>Save</button>
                    <button className='btns'>Cancel</button>
                </div> : 
                 <div>
                    <button className='btns'onClick={this.isActiveFalse} >Edit</button>
                    <button className='btns' onClick={this.deeleted}>Delete</button>
                </div>}
              
            </div>
        );
    }
}

function mSTP (store){
    return {
        data: store.mass,
        bool: store.bool,
    }
}
function mDTP (dispatch) {
    return {
        deleted: function (id){
            dispatch(deletItems(id))
        },
        bools: function () {
            dispatch(bool())
        }
    }
}
export default connect(mSTP, mDTP)(ToDooList);