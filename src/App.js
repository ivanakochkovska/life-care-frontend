import React from 'react';
import logo from './logo.svg';
import './App.css';
import Simulations from "./containers/simulations/simulations"
import GuideHeader from "./containers/guide-header/guideheader"
import Contact from "./components/contact/contact";
class App extends React.Component {
  render() {
    return (
        <div>

          <GuideHeader/>
          <Simulations/>
          <Contact/>
        </div>


    )
  }

}


export default App;

