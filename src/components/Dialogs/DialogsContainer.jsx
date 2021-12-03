import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();
  return (
    <Dialogs
      dialogData={state.dialogPage.dialogData}
      messageData={state.dialogPage.messageData}
      store={props.store}
    />
  );
};

export default DialogsContainer;
