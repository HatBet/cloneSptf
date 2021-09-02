import React, { Component } from "react";
import PlaylistCard from "./PlaylistCard";
import Profile from "./Profile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const data = [{}, {}, {}, {}, {}];

// export const data =[
//   {id:0, dataGroup:dataGroup.text1, title:},{},{},{},{}
// ]

export default class List extends Component {
  state = {
    albums: [],
    playlists: []
  };

  componentDidMount() {
    this.getAlbum();
    this.getPlaylist();
  }

  getAlbum = async () => {
    let config = {
      headers: {
        Authorization:
          "Bearer BQDIL4j7RRW6NcgEQLVNBOSisGJW3FatrSDDdotw4w5-HVn86WfB1tQeVFBd_p-zYDB8wFhTRmWOuzrCx8qh2_RjEIVA9ZIJZmf546mztnqOgfjadmfNgImP-cmhg65aSDOQy1odC-sKJVgtOzcGKKWIOZtQ4_U",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    await axios.get('https://api.spotify.com/v1/search?limit=20&offset=0&q=arabesk&type=album&market=tr', config).then((res)=>{
      this.setState({ albums : res.data.albums.items })
     });
  };

  getPlaylist = async() => {
    let config = {
      headers: {
        Authorization:
          "Bearer BQDIL4j7RRW6NcgEQLVNBOSisGJW3FatrSDDdotw4w5-HVn86WfB1tQeVFBd_p-zYDB8wFhTRmWOuzrCx8qh2_RjEIVA9ZIJZmf546mztnqOgfjadmfNgImP-cmhg65aSDOQy1odC-sKJVgtOzcGKKWIOZtQ4_U",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    await axios.get('https://api.spotify.com/v1/search?limit=20&offset=0&q=arabesk&type=playlist&market=tr', config).then((res)=>{
      this.setState({playlists: res.data.playlists.items})

     });
  }


  render() {
    const { match } = this.props;
    console.log("response", this.state.albums);
    return (
      <div className="d-flex flex-column">
        <div className="d-flex flex-column ">
          <FontAwesomeIcon icon={faChevronLeft} className="icon-lft" />
          <FontAwesomeIcon icon={faChevronRight} className="icon-rght" />
          <Profile />
        </div>
        <div className="d-flex flex-column">
          <h5 className="playlist-title">İyi günler</h5>
          <div className="playlist-list">
            {this.state.albums.map((i) => {
              return <PlaylistCard data={i} match={match} />;
            })}
          </div>
          <div className="d-flex flex-column">
            <h5 className="playlist-title">Senin için derlendi.</h5>
            <p className="playlist-desc">
              Daha çok dinledikçe daha iyi tavsiyeler al.
            </p>
            <div className="playlist-list">
              {this.state.playlists.map((i) => {
                return <PlaylistCard data={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
