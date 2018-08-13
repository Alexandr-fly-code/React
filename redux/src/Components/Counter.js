import React, { Component } from 'react';
import './Counter.css';
import { connect } from 'react-redux';
import {add, dec, reset, inAsync} from './action/counterAction';
import { galleryAsync } from './action/galleryAction';

class Counter extends Component {



    // state = {
    //     counter: 0,
    // }

    rise = () => {
        this.props.inAsync(3);
    }

    // add = () => {
    //     this.setState(prev => ({
    //         counter: prev.counter+1,
    //     }))
    // }

    // minus = () => {
    //     this.setState(prev => ({
    //         counter: prev.counter-1,
    //     }))
    // }

    // reset = () => {
    //     this.setState({
    //         counter: 0,
    //     })
    // }

    render() {
        // const {counter} = this.state;
        return (
            <div className='redux'>
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={this.props.reset}>reset</button>
                <button onClick={this.props.galleryAsync}>+</button>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        counter: state.counter, 
    }
}

function mapDicpatchToProps (dispatch) {
    return {
        increment: function () {
            dispatch(add())
        },
        decrement: function () {
            dispatch(dec())
        },
        reset: function () {
            dispatch(reset())
        },
        inAsync: function (number) {
            dispatch(inAsync(number))
        },
        galleryAsync: function () {
            dispatch(galleryAsync())
        }
    }
}
// Counter.propTypes = {

// };

export default connect(mapStateToProps, mapDicpatchToProps)(Counter);