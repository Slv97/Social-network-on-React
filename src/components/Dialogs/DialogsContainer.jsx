import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
 
  return (
    <StoreContext.Consumer>
      {store => {
         let state = store.getState();
        return (
          <Dialogs
            dialogData={state.dialogPage.dialogData}
            messageData={state.dialogPage.messageData}
          />
        );
      }
    }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
