import React, { Component } from 'react';
import './ToDoo.css';
import {connect} from 'react-redux';
import {deletItems} from '../../action/deleteAction';


class ToDooList extends Component {

    deeleted = () => {
        // this.props.deleted()
        console.log(this.props.data[0].id)
        this.props.deleted(this.props.data[0].id)
    }

    render() {
        // console.log(this.props);
        const {arr, deletes} = this.props;
        return (
            <div>
                <button className='btns' onClick={this.deeleted}>Delete</button>
            </div>
        );
    }
}

function mSTP (store){
    return {
        data: store.mass,
    }
}
function mDTP (dispatch) {
    return {
        deleted: function (id){
            dispatch(deletItems(id))
        }
    }
}
export default connect(mSTP, mDTP)(ToDooList);