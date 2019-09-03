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
   
    let dialogs = 
    [
        { id: 1, name:"Dima" },
        { id: 2, name:"Nick" },
        { id: 3, name:"Sasha" },
        { id: 4, name:"Vera" },
        { id: 5, name:"Cristina" },
        { id: 6, name:"Nastya" }
    ];

    let messages = [
        { message:"Hi" },
        { message:"Hello" },
        { message:"Yo" },
        { message:"sdff" },
        { message:"Ysfsdfo" },]

    let dialogsElements= dialogs.map (d => <DialogsItem name= {d.name} id={d.id}/>);
        
    
            
    let messageElements=messages.map(m=><Message message={m.message} />);        




    return (
        <div className={s.apper}>
            <div className={s.dialog} >
                {/* Dialogs
                <DialogsItem name= dialogs[0].name} id= dialogs[0].id} />
                <DialogsItem name= dialogs[1].name} id= dialogs[1].id} />
                <DialogsItem name= dialogs[2].name} id= dialogs[2].id} />
                <DialogsItem name= dialogs[3].name} id= dialogs[3].id} />
                <DialogsItem name= dialogs[4].name} id= dialogs[4].id} />
                <DialogsItem name= dialogs[5].name} id= dialogs[5].id} /> */}
               {dialogsElements}
            </div>

            <div className={s.message}>
                {/* Message
            <Message message={messages[0].message} id={messages[0].id} />
            <Message message={messages[1].message} id={messages[1].id} />
            <Message message={messages[2].message} id={messages[2].id} />
            <Message message={messages[3].message} id={messages[3].id} />
            <Message message={messages[4].message} id={messages[4].id} /> */}
            {messageElements}

               
            </div>
        </div>
    )
}
export default Dialogs;