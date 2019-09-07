import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper_content'>
          <Route path='/dialogs' render={() => <Dialogs messages={props.messages} dialogs={props.dialogs} />}></Route>
          <Route path='/profile' render={() => <Profile posts={props.posts}  />}></Route>
        </div>
      </div>
    </BrowserRouter>)
}
export default App;