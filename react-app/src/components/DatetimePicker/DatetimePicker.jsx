import React, { Fragment } from "react";
export default class DatetimePicker extends React.Component {
    state = {
        date: new Date(Date.now) // "2025-10-06T08:42"
    }
    handleDateChange = e => {
        this.props.onDatetimeChange(e.target.value)
        this.setState({date: e.target.value})
    }

    render() {
        return (
            <Fragment>
                <label htmlFor="adv-datetime">Local Datetime:</label>
                <input type="datetime-local" id="adv-datetime" name="adv-datetime" onChange={this.handleDateChange} />
            </Fragment>
        )
    }
}