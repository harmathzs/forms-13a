import React from "react";
export default class FileUploadPage extends React.Component {
    state = {
        selectedFile: null
    }

    handleFileSelect = e => {
        //console.log('handleFileSelect files', e.target.files[0])

        const selectedFile = e.target.files[0]
        this.setState({selectedFile})
    }

    handleSubmit = e => {
        e.preventDefault()
        if (!this.state.selectedFile) {
            console.warn('Hey, no file is selected!')
            return null
        }

        
    }

    render() {
        return (
            <div id="content-file" className="tab-content active">
                <h2>File Upload</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="fileInput">Choose file to upload:</label>
                    <input type="file" id="fileInput" name="fileInput" multiple
                        onChange={this.handleFileSelect}
                    />
                    <button type="submit">Upload</button>
                </form>
            </div>
        )
    }
}