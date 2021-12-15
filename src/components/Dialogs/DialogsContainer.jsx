import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogData: state.dialogPage.dialogData,
    messageData: state.dialogPage.messageData,
    isAuth: state.auth.isAuth
  };
};

let mapDispatchToProps = () => {
  return {};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
