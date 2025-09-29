import React from "react";
export default class FileUploadPage extends React.Component {
    render() {
        return (
            <div id="content-file" className="tab-content active">
                <h2>File Upload</h2>
                <form>
                    <label htmlFor="fileInput">Choose file to upload:</label>
                    <input type="file" id="fileInput" name="fileInput" multiple />
                    <button type="submit">Upload</button>
                </form>
            </div>
        )
    }
}