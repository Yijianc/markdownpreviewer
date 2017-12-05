import React, { Component } from 'react';
import logo from './logo.svg';
import './styles//App.scss';

import request from 'superagent';
import Previewer from './previewer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.markdownURL = "https://api.github.com/markdown/raw";
    this.state = {
      value: "Hello world github/linguist#1 **cool**, and #1!",
      resMarkdown: ''
    };
  }
  updateValue(modifiedValue) {
    this.setState({
      value: modifiedValue
    });
  }
  convertMarkdown(value) {
    let postData = this.state.value;
    request
      .post(this.markdownURL)
      .set({'Content-Type': 'text/plain'})
      .send(postData)
      .end((res, err) => {
        console.log(res, err, 999);
        this.setState({resMarkdown: err.text});
        this.rawMarkup(err.text);
      })
  }
  rawMarkup(value) {
    return { __html: value };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <button className="btn btn-primary" onClick={e => this.convertMarkdown()}>预览</button>
          </div>
        </div>
        <Previewer
          ref={previewerRef => this.previewerRef = previewerRef}
          rawMarkup={this.rawMarkup.bind(this)}
          updateValue={this.updateValue.bind(this)}
          resMarkdown={this.state.resMarkdown}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default App;
