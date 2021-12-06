import React from "react";
import {
  addNewMessageActionCreator,
  upDateNewMessageActionCreator,
} from "../../../redux/dialogs-reducer";
import StoreContext from "../../../StoreContext";
import NewMessage from "./NewMessage";

const NewMessageContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();

        let addNewMessage = () => {
          store.dispatch(addNewMessageActionCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(upDateNewMessageActionCreator(text));
        };

        return (
          <NewMessage
            addNewMessageActionCreator={addNewMessage}
            upDateNewMessageActionCreator={onMessageChange}
            newMessageText={state.dialogPage.newMessageText}
          />
        );
      }
    }
    </StoreContext.Consumer>
  );
};

export default NewMessageContainer;
