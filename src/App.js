import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper_content'>
          <Route path='/dialogs' render={() => <Dialogs/>}></Route>
            <Route path='/profile' render={() => <Profile/>}></Route>
        </div>
      </div>
    </BrowserRouter>)
  }
export default App;