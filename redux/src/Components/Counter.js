import React, { Component } from 'react';
import './Counter.css';
import { connect } from 'react-redux';
import {add, dec, reset} from './action/counterAction';

class Counter extends Component {



    // state = {
    //     counter: 0,
    // }

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
                <button onClick={this.props.increment}>+</button>
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
        }
    }
}
// Counter.propTypes = {

// };

export default connect(mapStateToProps, mapDicpatchToProps)(Counter);