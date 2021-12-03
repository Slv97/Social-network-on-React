import React from "react";
import {
  addNewMessageActionCreator,
  upDateNewMessageActionCreator,
} from "../../../redux/dialogs-reducer";

const NewMessage = (props) => {
  let textNewMessage = React.createRef();

  let addNewMessage = () => {
    props.dispatch(addNewMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = textNewMessage.current.value;
    props.dispatch(upDateNewMessageActionCreator(text));
  };

  return (
    <div>
      <textarea
        onChange={onMessageChange}
        ref={textNewMessage}
        value={props.newMessageText}
      ></textarea>
      <button onClick={addNewMessage}>+</button>
    </div>
  );
};

export default NewMessage;
