import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import s from './components/Profile/MyPost/MyPost.module.css'

let messages = [
    { message: "Hi" },
    { message: "Hello" },
    { message: "Yo" },
    { message: "sdff" },
    { message: "Ysfsdfo" },]
let dialogs = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Nick" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Vera" },
    { id: 5, name: "Cristina" },
    { id: 6, name: "Nastya" }
];
let posts = [
    {message: "hello, How are you?",   likecount: <img className={s.size} src='https://www.pinclipart.com/picdir/middle/357-3571100_like-png-logo-facebook-me-gusta-vector-clipart.png'></img>
    , id: 77},
    {message: "Hi, I am fine", likecount: <img className={s.size} src='https://www.pinclipart.com/picdir/middle/357-3571100_like-png-logo-facebook-me-gusta-vector-clipart.png'></img>
    , id: 21}
  ]
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}   />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



    // let dialogs = [
    //     { id: 1, name: "Dima" },
    //     { id: 2, name: "Nick" },
    //     { id: 3, name: "Sasha" },
    //     { id: 4, name: "Vera" },
    //     { id: 5, name: "Cristina" },
    //     { id: 6, name: "Nastya" }
    // ];

    // let messages = [
    //     { message: "Hi" },
    //     { message: "Hello" },
    //     { message: "Yo" },
    //     { message: "sdff" },
    //     { message: "Ysfsdfo" },]

    //     let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
    // let messageElements = props.messages.map(m => <Message message={m.message} />);




