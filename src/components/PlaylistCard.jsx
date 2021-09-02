import React, { Component} from "react";
import "./components.css";
import coverpic from "../images/coverpicture.png";

const axios = require('axios')


export default class PlaylistCard extends Component{
   
    render() {
    const {match, data} =this.props;
     const images = data.images ? data.images[0].url : coverpic
    return (
      <div className="playlist-card" key={data.id}>
        <img src={images} className="playlist-img"/>
        <h5 className="playlist-title">{data.name}</h5>
        <p className="playlist-desc">{data.artists ? data.artists.map(i => i.name) : null}</p>
      </div>
    );
}}

