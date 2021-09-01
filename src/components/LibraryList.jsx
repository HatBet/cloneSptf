import React, { Component } from "react";
import Profile from "./Profile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import PlaylistCard from "./PlaylistCard";


export default class LibraryList extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
            <div className="d-flex flex-row">
              <FontAwesomeIcon icon={faChevronLeft} className="icon-lft" />
              <FontAwesomeIcon icon={faChevronRight} className="icon-rght" />
              
              <Profile />
            </div>
            <div className="d-flex flex-column">
              <PlaylistCard/>
            </div>
          </div>
        )
    }
}
