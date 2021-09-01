import React, { Component } from 'react'
import Slidebar from '../components/Slidebar';
import Player from '../components/Player';
import LibraryList from '../components/LibraryList';

export default class Library extends Component {
    render() {
        return (
            <div className="App">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">
                  <Slidebar />
                </div>
                <div className="col-md-10">
                  <LibraryList/>
                </div>
              </div>
              <div className="row  justify-content-end" >
                <Player />
              </div>
            </div>
          </div>
        )
    }
}
