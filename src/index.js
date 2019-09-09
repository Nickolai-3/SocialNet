import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state'

ReactDOM.render(<App state={state}/>, document.getElementById('root'));
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




