import React, { Fragment } from "react";
export default class TimePicker extends React.Component {
    state = {
        time: new Date(Date.now).getTime()
    }
    handleTimeChange = e => {
        this.props.onTimeChange(e.target.value)
        this.setState({time: e.target.value})
    }

    render() {
        return (
            <Fragment>
                <label htmlFor="adv-time">Time:</label>
                <input type="time" id="adv-time" name="adv-time" onChange={this.handleTimeChange} />
            </Fragment>
        )
    }
}