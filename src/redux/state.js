import React from 'react';

import s from '../redux/state.module.css'

let state = {
   DialogsPage:{
      messages : [
    { message: "Hi" },
    { message: "Hello" },
    { message: "Yo" },
    { message: "sdff" },
    { message: "Ysfsdfo" },
],
dialogs: [
   { id: 1, name: "Dima" },
   { id: 2, name: "Nick" },
   { id: 3, name: "Sasha" },
   { id: 4, name: "Vera" },
   { id: 5, name: "Cristina" },
   { id: 6, name: "Nastya" }
],},
  ProfilePage : 
 {
 posts : [
    {message: "hello, How are you?",   likecount: <img className={s.size} src='https://www.pinclipart.com/picdir/middle/357-3571100_like-png-logo-facebook-me-gusta-vector-clipart.png'></img>
    , id: 77},
    {message: "Hi, I am fine", likecount: <img className ={s.size} src='https://www.pinclipart.com/picdir/middle/357-3571100_like-png-logo-facebook-me-gusta-vector-clipart.png'></img>
    , id: 21}
  ],}
}
export default state;