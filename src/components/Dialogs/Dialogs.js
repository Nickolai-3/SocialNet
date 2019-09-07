import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';





const Dialogs = () => {


    let dialogs = [
        { id: 1, name: "Dima" },
        { id: 2, name: "Nick" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Vera" },
        { id: 5, name: "Cristina" },
        { id: 6, name: "Nastya" }
    ];

    let messages = [
        { message: "Hi" },
        { message: "Hello" },
        { message: "Yo" },
        { message: "sdff" },
        { message: "Ysfsdfo" },]
    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messageElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.apper}>
            <div className={s.dialog} >
                <DialogsItem/>
                {dialogsElements}
            </div>
            <div className={s.message}>
                <Message/>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;