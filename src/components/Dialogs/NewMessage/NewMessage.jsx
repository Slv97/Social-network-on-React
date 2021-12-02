import React from "react";

const NewMessage = (props) => {
  let textNewMessage = React.createRef();

  let addNewMessage = () => {    
    props.dispatch({type: 'ADD-MESSAGE'});
  };

  let onMessageChange = () => {
    let text = textNewMessage.current.value;
    let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text}
    props.dispatch( action )
  }

  return (
    <div>
      <textarea onChange={onMessageChange} ref={textNewMessage} value={props.newMessageText}></textarea>
      <button onClick={addNewMessage}>+</button>
    </div>
  );
};

export default NewMessage;
