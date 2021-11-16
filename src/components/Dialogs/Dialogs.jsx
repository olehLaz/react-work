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

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Oleh'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Valery'},
    {id: 6, name: 'Andrew'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are your'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Traktor'}
]


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />


                {/*<DialogItem name="Dimych" id="1" />
                <DialogItem name="Oleh" id="2" />
                <DialogItem name="Sveta" id="3" />
                <DialogItem name="Viktor" id="4" />
                <DialogItem name="Valery" id="5" />
                <DialogItem name="Andrey" id="6" />*/}

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
                <Message message={messagesData[0].message}  />
                <Message message={messagesData[1].message}  />
                <Message message={messagesData[2].message}  />
                <Message message={messagesData[3].message}  />
                {/*<Message message="Hi"/>
                <Message message="How are your"/>
                <Message message="Yo"/>*/}

                {/*<div className={s.message}>Hi</div>
                <div className={s.message}>How are your</div>
                <div className={s.message}>Yo</div>*/}
            </div>
        </div>
    );
}
export default Dialogs;