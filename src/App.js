import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from './containers/Homepage/Homepage';
import Admin from './containers/Adminpage/Admin';
import InternalGuide from './containers/InternalGuidepage/InternalGuide';
import ProjectIncharge from './containers/ProjectInchargepage/ProjectIncharge';
import Studentpage from './containers/Studentpage/Studentpage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer'
import HOD from './containers/HODpage/HOD';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Route path="/" exact component={Homepage} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/internal-guide" exact component={InternalGuide} />
        <Route path="/project-incharge" exact component={ProjectIncharge} />
        <Route path="/student" exact component={Studentpage} />
        <Route path="/hod" exact component={HOD} />
        <footer>
          <Footer />
        </footer>

      </div>
    </Router>


  );
}

export default App;
