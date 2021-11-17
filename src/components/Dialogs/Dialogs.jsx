import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Oleh'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Valery'},
    {id: 6, name: 'Andrew'}
]


let DialogsElements = dialogsData
    .map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id} />
);

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are your'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Traktor'}
]

let MessagesElements = messagesData
    .map( (message) =>
          <Message message={message.message} />
    );

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    DialogsElements
                }
            </div>
            <div className={s.messages}>
                {
                    MessagesElements
                }

            </div>
        </div>
    );
}
export default Dialogs;