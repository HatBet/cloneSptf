import React, { Component} from "react";
import "./components.css";
import coverpic from "../images/coverpicture.png";

const axios = require('axios')


export default class PlaylistCard extends Component{
    constructor(props){
      super(props)

      this.state={
        albums:[]
      }
      this.makeGetRequest()
    }

     makeGetRequest = () =>{
      axios.get('https://api.spotify.com/v1/albums?ids=3JfSxDfmwS5OeHPwLSkrfr&market=tr').then((res)=>{
        this.setState(res.albums)
      });
    }
    render() {
      const {match} =this.props;
      console.log('test', match)
    return (
      <div className="playlist-card">
        {this.state.albums.map((albums)=>{
          return <div>{albums.name}</div>
        })
        }
        <img src={coverpic} className="playlist-img"/>
        <h5 className="playlist-title">{}</h5>
        <p className="playlist-desc">açıklama</p>
        
      </div>
    );
  
}}

