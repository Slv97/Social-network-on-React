import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogData: state.dialogPage.dialogData,
    messageData: state.dialogPage.messageData,
  };
};

let mapDispatchToProps = () => {
  return {};
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent );

export default DialogsContainer;
