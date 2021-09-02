import React, { Component } from "react";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faHeart,
  faDownload,
  faPlay
} from "@fortawesome/free-solid-svg-icons";

export default class PlayListDetails extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <FontAwesomeIcon icon={faChevronLeft} className="icon-lft" />
          <FontAwesomeIcon icon={faChevronRight} className="icon-rght" />
          <Profile />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <h1>Albüm</h1>
              <h3>Albüm adı</h3>
              <div className="d-flex flex-row">
                sanatçı resmi ve adı . tarih.şarkı sayısı
              </div>
            </div>
          </div>
          <div className="row">
      
            <FontAwesomeIcon icon={faPlay} className="icon-play" />
              <FontAwesomeIcon icon={faHeart} className="icon-fav" />
              <FontAwesomeIcon icon={faDownload} className="icon-download" />
            </div>
          
          <div className="row">detay</div>
        </div>
      </div>
    );
  }
}
