import './App.css'
import Search from './pages/Search';
import Home from './pages/Home';
import Library from './pages/Library';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/library" component={Library}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
