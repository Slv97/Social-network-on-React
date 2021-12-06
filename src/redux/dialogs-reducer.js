const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogData: [
    {
      id: 1,
      name: "Lena",
      img:
        "https://www.b17.ru/foto/uploaded/f3b538ed0993ae5cd5c458bf02088d1a.jpg",
    },
    {
      id: 2,
      name: "Leha",
      img:
        "https://cdnn11.img.sputnik.by/img/07e5/05/18/1047704580_134:-1:1280:720_1920x0_80_0_0_63757a89f346a7ecf2af69af9eb1a559.jpg",
    },
    {
      id: 3,
      name: "Andy",
      img: "https://lifeglobe.net/x/entry/4163/1.jpg",
    },
  ],
  messageData: [
    { id: 1, text: "hi" },
    { id: 2, text: "kaka" },
    { id: 3, text: "lol" },
    { id: 4, text: "hi" },
  ],
  newMessageText: "message",
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let stateCopy = {...state}
      let newMessage = {
        id: 5,
        text: state.newMessageText,
      };
      stateCopy.messageData = [...state.messageData]
      stateCopy.messageData.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
      

    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = {...state}
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
      

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
