import React, { Component } from "react";
import PlaylistCard from "./PlaylistCard";
import Profile from "./Profile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const data = [{}, {}, {}, {}, {}];

// export const data =[
//   {id:0, dataGroup:dataGroup.text1, title:},{},{},{},{}
// ]

export default class List extends Component {
  render() {
    const {match}=this.props;
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
            {data.map((i) => {
              return <PlaylistCard data={i} match={match} />;
            })}
          </div>
        </div>
        <div className="d-flex flex-column">
          <h5 className="playlist-title">Senin için derlendi.</h5>
          <p className="playlist-desc">
            Daha çok dinledikçe daha iyi tavsiyeler al.
          </p>
          <div className="playlist-list">
            {data.map((i) => {
              return <PlaylistCard data={i} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
