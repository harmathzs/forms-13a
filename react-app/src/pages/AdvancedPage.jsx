import React from "react";
export default class AdvancedPage extends React.Component {
    render() {
        return (
            <div id="content-advanced" className="tab-content active">
                <h2>Advanced Form Elements</h2>
                <form autoComplete="on">
                    <div className="form-row">
                        <label htmlFor="adv-text">Text:</label>
                        <input type="text" id="adv-text" name="adv-text" placeholder="Text input sample" />
                    </div>
                    <div className="form-row">
                        <label>Checkbox:</label>
                        <div className="checkbox-group">
                            <input type="checkbox" id="adv-checkbox1" name="adv-checkbox1" /><label htmlFor="adv-checkbox1">Item 1</label>
                            <input type="checkbox" id="adv-checkbox2" name="adv-checkbox2" /><label htmlFor="adv-checkbox2">Item 2</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <label>Radio group:</label>
                        <div className="radio-group">
                            <input type="radio" id="adv-radio1" name="adv-radio" value="A" /><label htmlFor="adv-radio1">A</label>
                            <input type="radio" id="adv-radio2" name="adv-radio" value="B" /><label htmlFor="adv-radio2">B</label>
                            <input type="radio" id="adv-radio3" name="adv-radio" value="C" /><label htmlFor="adv-radio3">C</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-color">Color picker:</label>
                        <input type="color" id="adv-color" name="adv-color" value="#263159" onChange={()=>{}} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-month">Month:</label>
                        <input type="month" id="adv-month" name="adv-month" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-week">Week:</label>
                        <input type="week" id="adv-week" name="adv-week" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-date">Date:</label>
                        <input type="date" id="adv-date" name="adv-date" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-time">Time:</label>
                        <input type="time" id="adv-time" name="adv-time" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-datetime">Local Datetime:</label>
                        <input type="datetime-local" id="adv-datetime" name="adv-datetime" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-email">Email:</label>
                        <input type="email" id="adv-email" name="adv-email" placeholder="example@mail.com" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="adv-tel">Telephone:</label>
                        <input type="tel" id="adv-tel" name="adv-tel" placeholder="+36 20 123 4567" />
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
}