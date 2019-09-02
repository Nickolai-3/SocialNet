import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom'

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div >
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>

    )
}

const Message = (props) => {
    
    return (
        <div>{props.message}</div>
    )
}

const Dialogs = (props) => {
   
    let dialogsData = 
    [
        { id: 1, name:"Dima" },
        { id: 2, name:"Nick" },
        { id: 3, name:"Sasha" },
        { id: 4, name:"Vera" },
        { id: 5, name:"Cristina" },
        { id: 6, name:"Nastya" }
    ]
        let messageData = [
            { id: 1, message:"Hi" },
            { id: 2, message:"Hello" },
            { id: 3, message:"Yo" },
            { id: 4, message:"sdff" },
            { id: 5, message:"Ysfsdfo" },
]

    return (
        <div className={s.apper}>
            <div className={s.dialog} >
                Dialogs
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogsItem name={dialogsData[5].name} id={dialogsData[5].id} />
               
            </div>

            <div className={s.message}>
                Message
            <Message message={messageData[0].message} id={messageData[0].id} />
            <Message message={messageData[1].message} id={messageData[1].id} />
            <Message message={messageData[2].message} id={messageData[2].id} />
            <Message message={messageData[3].message} id={messageData[3].id} />
            <Message message={messageData[4].message} id={messageData[4].id} />

               
            </div>
        </div>
    )
}
export default Dialogs;