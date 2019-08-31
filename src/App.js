import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper_content'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={Profile} />
          <Route path='/music' component={Profile} />
          <Route path='/settings' component={Profile} />
        </div>
      </div>
    </BrowserRouter>)
}
export default App;