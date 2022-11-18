import "./App.scss";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Journal from "./containers/Journal/Journal";

function JournalMain() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Journal />
      </PersistGate>
    </Provider>
  );
}

export default JournalMain;
