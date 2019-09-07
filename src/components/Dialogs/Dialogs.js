import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';





const Dialogs = (props) => {
debugger
    

    
    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messageElements = props.messages.map(m => <Message message={m.message} />);

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