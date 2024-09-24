import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TrelloBoard from "./components/TrelloBoard";

const App = () => {
  return (
    <Provider store={store}>
      <TrelloBoard />
    </Provider>
  );
};

export default App;
