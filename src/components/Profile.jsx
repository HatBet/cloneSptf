import React, { Component } from "react";
import profilPic from "../images/ProfilePic.png";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img src={profilPic} className="profile-pic"/>
        <h6 className="profile-title">Arthur</h6>
      </div>
    );
  }
}
