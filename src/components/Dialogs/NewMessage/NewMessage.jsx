import React from "react";

const NewMessage = (props) => {
  let textNewMessage = React.createRef();

  let addNewMessage = () => {
    props.addNewMessageActionCreator()
  };

  let onMessageChange = () => {
    let text = textNewMessage.current.value;
    props.upDateNewMessageActionCreator(text)
  };

  return (
    <div>
      <textarea
        onChange={ onMessageChange }
        ref={ textNewMessage }
        value={ props.newMessageText }
      ></textarea>
      <button onClick={ addNewMessage }>+</button>
    </div>
  );
};

export default NewMessage;
