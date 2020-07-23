import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from './containers/Homepage/Homepage';
import Admin from './containers/Adminpage/Admin';
import InternalGuide from './containers/InternalGuidepage/InternalGuide';
import ProjectIncharge from './containers/ProjectInchargepage/ProjectIncharge';
import Studentpage from './containers/Studentpage/Studentpage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Homepage} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/internal-guide" exact component={InternalGuide} />
        <Route path="/project-incharge" exact component={ProjectIncharge} />
        <Route path="/student" exact component={Studentpage} />
      </div>
    </Router>

  );
}

export default App;
