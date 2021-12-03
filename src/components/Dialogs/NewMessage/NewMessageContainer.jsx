import React from "react";
import {
  addNewMessageActionCreator,
  upDateNewMessageActionCreator,
} from "../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";

const NewMessageContainer = (props) => {
  let state = props.store.getState();

  let addNewMessage = () => {
    props.store.dispatch(addNewMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(upDateNewMessageActionCreator(text));
  };

  return (
    <NewMessage
      addNewMessageActionCreator={addNewMessage}
      upDateNewMessageActionCreator={onMessageChange}
      newMessageText={state.dialogPage.newMessageText}
    />
  );
};

export default NewMessageContainer;
