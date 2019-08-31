import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'

const Dialogs = () => {
    return (
        <div className={s.apper}>
            <div className={s.Dialogs}>
                Dialogs
            <div className={s.active}>
                   <NavLink to ='/dialogs/1' activeClassName={s.active}>Dima</NavLink> 
            </div>
            
                <div className={s.dial}>
                <NavLink to ='/dialogs/2' activeClassName={s.active}>Nick</NavLink> 

                    
            </div>
                <div className={s.dial}>
                <NavLink to ='/dialogs/3'>Masha</NavLink> 

                    
            </div>
                <div className={s.dial}>
                <NavLink to ='/dialogs/4'>Vera</NavLink> 

                    
            </div>
                <div className={s.dial}>
                <NavLink to ='/dialogs/5'>Christina</NavLink> 

                    
           
                </div>
                </div>
            
            <div className={s.message}>
                Message
            <div className="Message">Hi</div>
                <div className="Message">Hello</div>
                <div className="Message">Hello friend</div>
            </div>
        </div>
    )
}
export default Dialogs;