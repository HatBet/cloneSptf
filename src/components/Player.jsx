import React, { Component } from "react";
import "../components/components.css";
import coverpic from "../images/MiniCover.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faStepBackward,
  faStepForward,
  faHeart,
  faRandom,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

export default class Player extends Component {
  state = {
    url: null,
    playing: true,
    played: 0,
    loop: false,
    random: false,
  };

  load = (url) => {
    this.setState({
      url,
      played: 0,
    });
  };

  handlePlayPause = () => {
    this.setState({
      playing: !this.state.playing,
    });
  };

  handleStop = () => {
    console.log("stop");
    this.setState({
      url: null,
      playing: false,
    });
  };

  handleToggleLoop = () => {
    console.log("Loop");
    this.setState({ loop: !this.state.loop });
  };

  handleRandom = () => {
    console.log("random");
    this.setState({ random: !this.state.random });
  };

  handlePlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };

  handleSeekChange = (e) => {
    console.log('played change')
    this.setState({played:parseFloat(e.target.value)})
  };
  render() {
    const { url, playing, loop, played, random } = this.state;
    return (
      <div className="player">
        <div className="player-card">
          <img src={coverpic} className="player-pic" />
          <div className="player-text">
            <h7 className="player-title">One step beyond</h7>
            <p className="player-desc">Madness</p>
          </div>
          <FontAwesomeIcon icon={faHeart} className="icon-heart" />
        </div>
        <div className="player-group">
          <div className="player-play">
            <FontAwesomeIcon
              icon={faRandom}
              className="icon-bck"
              size={"1x"}
              onClick={this.handleRandom}
            />
            <FontAwesomeIcon
              icon={faStepBackward}
              className="icon-bck"
              size={"1x"}
            />
            <FontAwesomeIcon
              icon={faPlayCircle}
              className="icon-ply"
              size={"2x"}
              onClick={this.handlePlay}
            />
            <FontAwesomeIcon
              icon={faStepForward}
              className="icon-frwrd"
              size={"1x"}
            />
            <FontAwesomeIcon
              icon={faSync}
              className="icon-frwrd"
              size={"1x"}
              onClick={this.handleToggleLoop}
            />
          </div>
          <div className="player-player">
            <ReactPlayer
              className="react-player"
              url={url}
              playing={playing}
              loop={loop}
              played={played}
              random={random}
              onReady={() => console.log("onReady")}
              onStart={() => console.log("onStart")}
              onPlay={this.handlePlay}
              onPause={this.handlePause}
              onError={(e) => console.log("onError", e)}
            />
            <progressBar onChange={this.handleSeekChange}/>
          </div>
        </div>
      </div>
    );
  }
}
