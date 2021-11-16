import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active } >
            <NavLink to={ path } >{ props.name }</NavLink>
        </div>
    );
}

const Message = (props) => {
 return (
     <div className={s.message}>{props.message}</div>
 );

}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1" />
                <DialogItem name="Oleh" id="2" />
                <DialogItem name="Sveta" id="3" />
                <DialogItem name="Viktor" id="4" />
                <DialogItem name="Valery" id="5" />
                <DialogItem name="Andrey" id="6" />

                {/*<div className={s.dialog}>
                    <NavLink to="/dialogs/2" >Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" >Oleh</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" >Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5" >Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6" >Valery</NavLink>
                </div>*/}
            </div>

            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are your"/>
                <Message message="Yo"/>

                {/*<div className={s.message}>Hi</div>
                <div className={s.message}>How are your</div>
                <div className={s.message}>Yo</div>*/}
            </div>
        </div>
    );
}
export default Dialogs;