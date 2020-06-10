import React, { Component } from 'react'

export default class Box extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(keyId) {
    // play audio file when key is clicked using id of audio div
    const btnClicked = document.getElementById(keyId);
    btnClicked.play();
    document.getElementById('keyDesc').innerHTML = this.props.desc;
  }

  render() {
    return (
      <div className="box drum-pad" id={this.props.keyCode} onClick={() => this.handleClick(this.props.text)}>
        {this.props.text}
        <audio className="clip" id={this.props.text} src={this.props.src} /> 
      </div>
    )
  }
}
