import React from "react";
export default class WeekPicker extends React.Component {
    state = {
        week: null
    }

    handleWeekChange = e => {
        const week = e.target.value // "2025-W37"
        this.props.onWeekChange(week)
        this.setState({week})
    }

    render() {
      return (
        <>
            <label htmlFor="adv-week">Week:</label>
            <input type="week" id="adv-week" name="adv-week"
                onChange={this.handleWeekChange}
            />
        </>
      )
    }
}