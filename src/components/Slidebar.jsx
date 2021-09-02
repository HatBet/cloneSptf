import React, { Component } from "react";
import "./components.css";
import logo from "../images/LogoSpotifyBig.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBook,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom'


const menuData = [
  { id: 0, name: "Home", icon: faHome, navigation: "/" },
  { id: 1, name: "Arama", icon: faSearch, navigation:"/search" },
  { id: 2, name: "Kütüphane", icon: faBook, navigation:"library" },
];

const data2 = [
  { id: 0, name: "Home", icon: faHome },
  { id: 1, name: "Arama", icon: faSearch },
  { id: 2, name: "Kütüphane", icon: faBook },
  { id: 0, name: "Home", icon: faHome },
  { id: 1, name: "Arama", icon: faSearch },
  { id: 2, name: "Kütüphane", icon: faBook },
  { id: 0, name: "Home", icon: faHome },
  { id: 1, name: "Arama", icon: faSearch },
  { id: 2, name: "Kütüphane", icon: faBook },
  { id: 0, name: "Home", icon: faHome },
  { id: 1, name: "Arama", icon: faSearch },
  { id: 2, name: "Kütüphane", icon: faBook },
  { id: 0, name: "Home", icon: faHome },
  { id: 1, name: "Arama", icon: faSearch },
  { id: 2, name: "Kütüphane", icon: faBook },
];

export default class Slidebar extends Component {
  render() {
    return (
      <div className="slidebar px-4 py-2">
        <img src={logo} alt="logo" />
        {menuData.map((i) => {
          return (
            <div
              key={i.id}
              className="d-flex flex-row align-items-center text-light mt-4"
            >
              <FontAwesomeIcon icon={i.icon} />
              <Link to={i.navigation} className="mx-2">
                {i.name}
              </Link>
            </div>
          );
        })}
        <div className="mt-5">
          <h5> Playlist</h5>
          <div className="d-flex flex-row align-items-center text-light">
            <FontAwesomeIcon icon={faPlus} className="icon-bg" />
            <span className="mx-2">Créer une playlist</span>
          </div>
          <div className="list-sidebar d-flex flex-column">
            {data2.map((i) => {
              return <a className="mx-2" key={i.id}>{i.name}</a>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
