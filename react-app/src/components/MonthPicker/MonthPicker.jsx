import React from "react";
export default class MonthPicker extends React.Component {
    state = {
        month: 0
    }

    handleMonthChange = e => {
        const month = e.target.value // "2025-07"
        this.props.onMonthChange(month)
        this.setState({month})
    }

    render() {
      return (
        <>
            <label htmlFor="adv-month">Month:</label>
            <input type="month" id="adv-month" name="adv-month" 
                onChange={this.handleMonthChange}
            />
        </>
      )
    }
}