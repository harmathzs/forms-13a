import React, { Fragment } from "react";
export default class MultilineInput extends React.Component {
    state = {
        content: ''
    }

    handleContentChange = e => {
        //console.log('handleContentChange e', e)
        const {value} = e.target
        //console.log('handleContentChange value', value)
        this.props.onChange(value)
        this.setState({content: value})
    }

    render() {
        return (
            <Fragment>
                <label htmlFor="adv-textarea">Textarea:</label>
                <textarea id="adv-textarea" name="adv-textarea" 
                    placeholder="Comments..." value={this.state.content}
                    onChange={this.handleContentChange}
                ></textarea>      
            </Fragment>
        )
    }
}