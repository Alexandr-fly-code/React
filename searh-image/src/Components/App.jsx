import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import {getValue} from './action/inputAction.js';
import Category from './Category/Category';
import Gallery from './Gallery/Gallery';
import { gets, resultAnimal, search} from './action/massAction';

class App extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.gets();

    }

    componentDidMount () {
        this.props.gets();
    }
    searchClick = () => {
        this.props.search(this.props.text);
    }

    render() {
        // const {search} = this.props;
        return (
            <div className='wrapper'>
                <form className='form' onSubmit={this.onSubmit}>
                    <input type="text" placeholder='Введите слово' className='input' value={this.props.text} onChange={this.props.getValue}/>
                    <button type='submit' className='btn' onClick={this.searchClick}>Search</button>
                </form>
            <div className='container'>
                    <div className='container-category'>
                         <Category/>
                    </div>
                    <div className='container-gallery'>
                        <Gallery/>
                    </div>
            </div>
            </div>
        );
    }
}

App.propTypes = {

};

function mSTP (store) {
    return {
        text: store.input,
        mass: store.mass,
    }
}

function mDTP (dispacth) {
    return {
        getValue: function (e) {
            dispacth(getValue(e.target.value))
        },
        gets: function (val) {
            dispacth(gets(val))
        },
        resultAnimal: function () {
            dispacth(resultAnimal())
        },
        search: function (query) {
            dispacth(search(query))
        }
    }
}

export default connect(mSTP, mDTP)(App);