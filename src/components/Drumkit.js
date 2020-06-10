import React, { Component } from 'react'
import Box from './Box';

export default class Drumkit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [
        {
          key: 'Q', 
          keyCode: 81,
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
          desc: 'Heater#1'
        },
        {
          key: 'W', 
          keyCode: 87,
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
          desc: 'Heater#2'
        },
        {
          key: 'E', 
          keyCode: 69,
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
          desc: 'Heater#3'
        },
        {
          key: 'A', 
          keyCode: 65,
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
          desc: 'Heater#4'
        },
        {
          key: 'S', 
          keyCode: 83,
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
          desc: 'Heater#5'
        },
        {
          key: 'D',
          keyCode: 68,
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
          desc: 'Dsc_Oh'
        },
        {
          key: 'Z', 
          keyCode: 90,
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
          desc: 'Kick n Hat'
        },
        {
          key: 'X', 
          keyCode: 88,
          src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
          desc: 'Kick'
        },
        {
          key: 'C', 
          keyCode: 67,
          src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
          desc: 'Cev'
        },
      ]
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    //Check if key pressed is in keys array and store as t/f
    var result = this.state.keys.find(obj => {
      return obj.keyCode === event.keyCode
    });

    if(result) {
      // play the audio file that corresponds to the pressed key
      const keyDiv = document.getElementById(result.key);
      keyDiv.play();
      // set display text to description of key
      document.getElementById('keyDesc').innerHTML = result.desc;
    }
  }

  render() {
    document.addEventListener("keydown", this.handleKeyPress);
    const { keys } = this.state;
    return (
      <div id="display" className="display">
        {/* Map keypad to display div */}
        {keys.map((key, idx) => (
          <Box text={key.key} src={key.src} keyCode={key.keyCode} key={idx} desc={key.desc}/>
        ))}
        {/* add a description of the key that's being pressed */}
        <p></p>
        <p id="keyDesc">Press a key!</p>
      </div>
    )
  }
}
