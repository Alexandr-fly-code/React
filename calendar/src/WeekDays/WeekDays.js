import React from 'react';
import './WeekDays.css';
import { connect } from 'react-redux'

const WeekDays = ({days}) => {
    return (
        <div className='row day-names'>
        {days.map(el => <span className="day" key={el}>{el}</span>)}
        </div>
    );
};


function mSTP (store) {
    return {
        days: store.days,
    }
}



export default connect(mSTP, null)(WeekDays);