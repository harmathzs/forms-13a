import React, {Component, Fragment} from "react";
export default class DropDown extends Component {
    state = {
        dropdownChosen: null
    }

    handleChoose = e => {
        const {value} = e.target
        //console.log('handleChoose e', e)
        console.log('handleChoose value', value)
        this.setState({dropdownChosen: e})
    }

    render() {
        return <Fragment>
            <label htmlFor="adv-select">Select:</label>
            <select id="adv-select" name="adv-select" onChange={this.handleChoose}>
                <option>--- Choose ---</option>
                <option value="foo">Foo</option>
                <option value="bar">Bar</option>
                <option value="baz">Baz</option>
            </select>            
        </Fragment>
    }
}