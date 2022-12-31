import Router from "./Router"
import { store } from "../store/store";
import { Provider } from "react-redux";
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
