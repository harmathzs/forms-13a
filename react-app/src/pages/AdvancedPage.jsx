import React from "react";
import InputField from "../components/InputField/InputField";
import Checkbox from "../components/Checkbox/Checkbox";
import RadioGroup from "../components/RadioGroup/RadioGroup";
import ColorPicker from "../components/ColorPicker/ColorPicker";
import MonthPicker from "../components/MonthPicker/MonthPicker";
import WeekPicker from "../components/WeekPicker/WeekPicker";
import DatePicker from "../components/DatePicker/DatePicker";
import TimePicker from "../components/TimePicker/TimePicker";
import DatetimePicker from "../components/DatetimePicker/DatetimePicker";

export default class AdvancedPage extends React.Component {
    state = {
        advText: '',
        advEmail: '',
        advTel: '',

        "adv-checkbox1": false,
        "adv-checkbox2": false,

        radioChecked: '',
    }

    handleAdvTextValueChange = advText => this.setState({advText})
    handleAdvEmailValueChange = advEmail => this.setState({advEmail})
    handleAdvTelValueChange = advTel => {
        console.log('handleAdvTelValueChange advTel "'+advTel+'"')
        let result = 'error in tel: '+advTel
        // TODO - validate tel with regex?
        if (advTel.length>=1)
            result = advTel
        this.setState({advTel})
        return result
    }
    handleCheckToggle = toggledCheckbox => {
        console.log('handleCheckToggle toggledCheckbox', toggledCheckbox)
        const newState = {...this.state}
        newState[toggledCheckbox] = !this.state[toggledCheckbox]
        this.setState(newState)
    }
    handleRadioCheck = radioId => {
        console.log('handleRadioCheck radioId', radioId)
        this.setState({radioChecked: radioId})
    }
    handleColorPick = color => this.setState({color})
    handleMonthChange = month => {
        this.setState({month})
    }
    handleWeekChange = week => this.setState({week})
    handleDateChange = date => this.setState({date})
    handleTimeChange = time => this.setState({time})
    handleDatetimeChange = date => this.setState({datetime: date})

    getRadioGroup = () => <div className="radio-group">
                            <input type="radio" id="adv-radio1" name="adv-radio" value="A" /><label htmlFor="adv-radio1">A</label>
                            <input type="radio" id="adv-radio2" name="adv-radio" value="B" /><label htmlFor="adv-radio2">B</label>
                            <input type="radio" id="adv-radio3" name="adv-radio" value="C" /><label htmlFor="adv-radio3">C</label>
                        </div>

    radioGroupInstance = this.getRadioGroup()

    render() {
        return (
            <div id="content-advanced" className="tab-content active">
                <h2>Advanced Form Elements</h2>
                <form autoComplete="on">
                    {/* TODO <InputField type="text" */}
                    <div className="form-row">
                        <InputField
                            type="text"
                            name="adv-text"
                            label="Text:"
                            placeholder="Text input sample"
                            onValueChange={this.handleAdvTextValueChange}
                        />
                    </div>
                    <div className="form-row">
                        <label>Checkbox:</label>
                        <div className="checkbox-group">
                            <Checkbox 
                                name="adv-checkbox1"
                                label="Item 1"
                                onCheckToggle={toggledCheckbox=>this.handleCheckToggle(toggledCheckbox)}
                            />
                            <Checkbox 
                                name="adv-checkbox2"
                                label="Item 2"
                                onCheckToggle={this.handleCheckToggle}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <label>Radio group:</label>
                        <RadioGroup
                            name="adv-radio"
                            ids={['adv-radio1', 'adv-radio2', 'adv-radio3']}
                            values={['A', 'B', 'C']}
                            labels={['A', 'B', 'C']}
                            onRadioChecked={this.handleRadioCheck}
                        >content string</RadioGroup>
                    </div>
                    <div className="form-row">
                        <ColorPicker onColorPick={this.handleColorPick} />
                    </div>
                    <div className="form-row">
                        <MonthPicker onMonthChange={this.handleMonthChange} />
                    </div>
                    <div className="form-row">
                        <WeekPicker onWeekChange={this.handleWeekChange} />
                    </div>
                    <div className="form-row">
                        <DatePicker onDateChange={this.handleDateChange} />
                    </div>
                    <div className="form-row">
                        <TimePicker onTimeChange={this.handleTimeChange} />
                    </div>
                    <div className="form-row">
                        <DatetimePicker onDatetimeChange={this.handleDatetimeChange} />
                    </div>
                    <div className="form-row">
                        <InputField
                            type="email"
                            name="adv-email"
                            label="Email:"
                            placeholder="example@mail.com"
                            onValueChange={this.handleAdvEmailValueChange}                        
                        />
                    </div>
                    <div className="form-row">
                        <InputField 
                            type="tel"
                            name="adv-tel"
                            label="Telephone:"
                            placeholder="+36 20 123 4567"
                            onValueChange={this.handleAdvTelValueChange}   
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-hidden">Hidden value:</label>
                        <input type="hidden" id="adv-hidden" name="adv-hidden" value="sample_hidden" />
                        <span style={{color: "#999"}}>(hidden in UI)</span>
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-number">Number:</label>
                        <input type="number" id="adv-number" name="adv-number" min="0" max="100" step="1" value="42" onChange={()=>{}} />
                    </div>
                    <div className="form-row range-bar">
                        <label htmlFor="adv-range">Range:</label>
                        <input type="range" id="adv-range" name="adv-range" min="0" max="100" step="1" value="50" onInput={()=>{}} />
                        <span id="rangeValue" style={{minWidth:'32px'}}>50</span>
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-select">Select:</label>
                        <select id="adv-select" name="adv-select">
                            <option>--- Choose ---</option>
                            <option value="foo">Foo</option>
                            <option value="bar">Bar</option>
                            <option value="baz">Baz</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-textarea">Textarea:</label>
                        <textarea id="adv-textarea" name="adv-textarea" placeholder="Comments..."></textarea>
                    </div>
                    <div className="button-row">
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
        )
    }

    componentDidUpdate(prevState, prevProps) {
        console.log('AdvancedPage state prev next', prevState, this.state)
        //console.log('AdvancedPage props prev next', prevProps, this.props)
    }
}