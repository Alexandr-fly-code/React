import React, { Component } from 'react';
import moment from 'moment';
import './Calendar.css';
import WeekDays from '../WeekDays/WeekDays'
import Grid from '../Grid/Grid';
// Redux
import { days } from '../action/daysAction';
import { prevMonth, nextMonth } from '../action/navigatinAction';
import { connect } from 'react-redux';

class Calendar extends Component {

    // state = {
    //     // now: moment(),
    //     // days: ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI','SAT']
    // }

    nextMonth = () => {
        let today = this.props.now.clone();
        this.props.nextMonth(today);    
    }
    prevMonth = () => {
        let today = this.props.now.clone();
        this.props.prevMonth(today);
    }

    // nextMonth = () => {
    //     let today = this.state.now.clone()
    //     this.setState({
    //         now: today.add(1, 'M'),
    //     })
    // }

    // prevMonth = () => {
    //     this.setState({
    //         now: this.state.now.subtract(1, 'M'),
    //     })
    // }

    calcDays = () => {
        const start = moment(this.props.now.startOf('month')).startOf('week');
        const end = moment(this.props.now.endOf('month')).endOf('week');
        let days = Math.round(moment.duration(end - start).asDays());
        const matrix = [];
        for (let i = 0; i < days; i++) {
        let result = start.format("DD");
        matrix.push(result)
        result = start.add(1, "days").format("DD");        
        }
        return matrix;

    }

    render() {
        this.calcDays();
        // const {days, now} = this.state;
        const {days, now} = this.props;
        // console.log(this.props)
        // console.log(now)
        return (
            <div className='calendar'>
                <header className="header">
                <div className="month-display row">
                <span className='arrow' onClick={this.prevMonth}>&#8656;</span>
                <span className="month-label">{`${this.props.now.format('MMMM')} ${this.props.now.year()}`}</span>
                <span className='arrow' onClick={this.nextMonth}>&#8658;</span>
                </div>
                <WeekDays/>
                </header>
                <Grid days={this.calcDays()}/>
            </div>
        );
    }
}

Calendar.propTypes = {

};

function mSTP (store) {
    return {
        days: store.days,
        now: store.now,
    }
}

function mSDP (dispatch) {
    return {
        prevMonth: function (today){
            dispatch(prevMonth(today))
        },
        nextMonth: function (today) {
            dispatch(nextMonth(today))
        }
    }
}
export default connect(mSTP, mSDP)(Calendar);