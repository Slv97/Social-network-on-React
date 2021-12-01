import React from "react";

const NewMessage = () => {
  let textNewMessage = React.createRef();
  let addNewMessage = () => {
    let text = textNewMessage.current.value;
    alert(text);
  };

  return (
    <div>
      <textarea ref={textNewMessage}></textarea>
      <button onClick={addNewMessage}>+</button>
    </div>
  );
};

export default NewMessage;
