import React, { Fragment } from "react";
export default class DatePicker extends React.Component {
    state = {
        date: new Date(Date.now) // "2025-10-16"
    }
    handleDateChange = e => {
        this.props.onDateChange(e.target.value)
        this.setState({date: e.target.value})
    }

    render() {
        return (
            <Fragment>
                <label htmlFor="adv-date">Date:</label>
                <input type="date" id="adv-date" name="adv-date"
                    onChange={this.handleDateChange}
                />
            </Fragment>
        )
    }
}