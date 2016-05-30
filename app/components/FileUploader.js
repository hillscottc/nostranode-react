import React from 'react'

export default class FileUploader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // Get data from a hidden field that was not rendered by React.
    this.handleFileData(document.getElementById('hiddenFileData').value);
  }

  handleFileData(fileData) {
    const fileRows = fileData.split("|");
    // I would just run the sql here.....
    fileRows.map(r => console.log("SQL FOR: " + r));
  }  
  
  
  render() {
    return (
        <div>
          <p>Post this file to this same ASP page. On the server,
            the ASP page will write the contents of the file to
            the 'hiddenFileData' field.</p>
          <form enctype="multipart/form-data" method="post">
            <label for="datafile">File: </label>
            <input type="file" id="datafile" name="datafile"/><br/>
            <input type="submit" value="Send"/>
          </form>
        </div>
    );
  }
}

