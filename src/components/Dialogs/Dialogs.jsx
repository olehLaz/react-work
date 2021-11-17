import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

let DialogsElements = props.dialogsData
    .map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id} />
);

let MessagesElements = props.messagesData
    .map( (message) =>
          <Message message={message.message} />
    );

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