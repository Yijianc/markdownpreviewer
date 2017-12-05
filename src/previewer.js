import React, { Component } from 'react';

import RawInput from './rawInput.js';

export default class PreviewerHelper extends Component {
  render() {
    const {updateValue, rawMarkup, value, resMarkdown} = this.props;
    return (
      <div className="row">
        <div className="col-md-6">
          <RawInput value={value} updateValue={updateValue}/>
        </div>
        <div className="col-md-6">
          <span dangerouslySetInnerHTML={rawMarkup(resMarkdown)} />
        </div>
      </div>
    );
  }
}
