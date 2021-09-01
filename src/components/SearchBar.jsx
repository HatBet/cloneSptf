import React, { Component } from "react";
import PlaylistCard from "./PlaylistCard";
import Profile from "./Profile";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";



export default class SearchBar extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <FontAwesomeIcon icon={faChevronLeft} className="icon-lft" />
          <FontAwesomeIcon icon={faChevronRight} className="icon-rght" />
          <div className="d-flex flex-row">
            <span className="search-bar-group">
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" className="search-bar-input" />
            </span>
          </div>
          <Profile />
        </div>
        <div className="d-flex flex-column">
        <div className="d-flex flex-column">
          <div className="playlist-list">
            <PlaylistCard/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
