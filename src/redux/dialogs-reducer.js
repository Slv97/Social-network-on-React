const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        text: state.newMessageText,
      };
      state.messageData.push(newMessage);
      state.newMessageText = "";
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;

    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => {
    return {
      type: ADD_MESSAGE
    }
  }
  
  export const upDateNewMessageActionCreator = (text) => {
    return {
      type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
  }

export default dialogsReducer;
