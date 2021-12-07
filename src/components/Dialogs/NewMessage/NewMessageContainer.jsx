import {
  addNewMessageActionCreator,
  upDateNewMessageActionCreator,
} from "../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux"

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewMessageActionCreator: () => {
      dispatch(addNewMessageActionCreator());
    },

    upDateNewMessageActionCreator: (text) => {
      dispatch(upDateNewMessageActionCreator(text));
    }
  }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)

export default NewMessageContainer;
