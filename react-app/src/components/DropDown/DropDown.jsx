import React, {Component, Fragment} from "react";
export default class DropDown extends Component {
    state = {
        dropdownChosen: null,
        options: new Map()
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
                {!this.state.dropdownChosen && <option>--- Choose ---</option>}
                {Array.from(this.state.options.entries())
                    .map(([key, value])=>(
                        <option key={key} value={key}>{value}</option>
                    ))
                }
            </select>            
        </Fragment>
    }

    componentDidMount() {
        //this.options.set("foo", "Foo")
        //this.options.set("bar", "Bar")
        //this.options.set("baz", "Baz")

        const optionsMap = new Map()
        optionsMap.set("foo", "Foo")
        optionsMap.set("bar", "Bar")
        optionsMap.set("baz", "Baz")
        this.setState({options: optionsMap})
    }
}