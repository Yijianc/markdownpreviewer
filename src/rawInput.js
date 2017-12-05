import React, { Component } from 'react';

export default class RawInputHelper extends Component {
  update() {
    let modifiedValue = this.inputRef.value;
    this.props.updateValue(modifiedValue);
  }
  render() {
    return (
      <textarea
        rows="30"
        type="text"
        className="form-control"
        ref={inputRef => this.inputRef = inputRef}
        value={this.props.value}
        onChange={e => this.update()}
      ></textarea>
    );
  }
}
