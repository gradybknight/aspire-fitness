import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SiteHeader from './components/SiteHeader';
import LandingPage from './components/LandingPage';


class App extends Component {
  render() {
    return (
      <>
        <SiteHeader />
        <LandingPage />
      </>
    );
  }
}

export default App;
