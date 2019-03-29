import React from "react";

import {
  play,
  pause,
  next,
  previous
} from "../../utils/spotify";

import "./Lyrics.scss";

let interval;

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
  }

  play = () => play();
  next = () => next();
  previous = () => previous();
  pause = () => pause();

  render() {
    return (
      <div className="controller">
        <h3 className='control-button' onClick={this.previous}>previous</h3>
        <h3 className='control-button' onClick={this.pause}>pause</h3>
        <h3 className='control-button' onClick={this.play}>play</h3>
        <h3 className='control-button' onClick={this.next}>next</h3>
      </div>
    );
  }
}
