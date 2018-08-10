import React, { Component } from 'react';
import './App.css';
import ToDoo from './ToDooList/ToDoo';
import {connect} from 'react-redux';
import {inputChange} from '../action/inputAction';
import {addItems} from '../action/addItemsAction';


class App extends Component {

    // state = {
    //     inputValue: '',
    //     mass: [],
    // }

    eventSubmit = (e) => {
        e.preventDefault();
    }


    funcAddItems = (e) => {
        e.preventDefault();
        this.props.inputText !== '' ? this.props.addItems(this.props.inputText) : alert('Введена пустая строка!');
        console.log(this.props.arr)
        // console.log(this.props)
    }
    // onChange = (e) => {
    //     const values = e.target.value;
    //     const input = e.target.name;
    //     this.setState({
    //         [input]: values,
    //     })
    // }

    // addLists = () => {
    //     const obj = {
    //         id: Date.now(),
    //         text: this.state.inputValue,
    //     }
    //     if (this.state.inputValue !== ''){
    //         this.setState(prev => ({
    //             mass: [obj, ...prev.mass],
    //             inputValue: '',
    //         }))
    //     } else {
    //         alert('Введена пустая строка!');
    //     }
        
    // }

    getInfo = () => {
        console.log(this.state.inputValue);
    }

    // deleetItems = (id) => {
    //     const filter = this.state.mass.filter(el => el.id !== id? el.id: null);
    //     this.setState(prev => ({
    //         mass: filter,
    //     }))
    // }

    render() {
        // const {inputValue, mass} = this.state;
        // console.log(object);
        // console.log(this.props.arr);
        return (
            <div className='container'>
                <form onSubmit={this.eventSubmit}>
                    <input type="text" className='input' value={this.props.inputText} name='inputValue' onChange={this.props.inputChange}/>
                    <button className='btn' onClick={this.funcAddItems} type='submit'>test</button>
                </form>
                <ToDoo  deletes={this.deleetItems}/>
            </div>
        );
    }
}

App.propTypes = {

};
function mSTP (store){
    return {
        inputText: store.text,
    }
}

function mDTP (dispatch){
    return {
        inputChange: function (e){
            dispatch(inputChange(e.target.value))
        },
        addItems: function (text){
            dispatch(addItems(text))
        }
    }
}


export default connect(mSTP, mDTP)(App)