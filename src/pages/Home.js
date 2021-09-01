import React from 'react';
import Slidebar from '../components/Slidebar';
import List from '../components/List';
import Player from '../components/Player';

class Home extends React.Component{
 render(){
    return (
        <div className="App">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <Slidebar />
              </div>
              <div className="col-md-10">
                <List />
              </div>
            </div>
            <div className="row  justify-content-end" >
              <Player />
            </div>
          </div>
        </div>
      );
 }
}

export default Home;
