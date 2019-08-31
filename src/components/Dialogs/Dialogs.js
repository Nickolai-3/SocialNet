import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom'

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div >
            <NavLink to ={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>

    )
}

const Message = (props) => {
    return (
        <div>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.apper}>
            <div className={s.dialog} >
                Dialogs
                <DialogsItem name="Dima" id="1" />
                <DialogsItem name="Nick" id="2" />
                <DialogsItem name="Sasha" id="3" />
                <DialogsItem name="Vera" id="4" />
                <DialogsItem name="Cristina" id="5" />
                <DialogsItem name="Nastya" id="6" />

            </div>

            <div className={s.message}>
                Message
            <Message message="Hi" />
                <Message message="Hello" />
                <Message message="How are you?" />
            </div>
        </div>
    )
}
export default Dialogs;