import { Provider } from "react-redux";
import Form_modal from "./formmodal";
import store from "./redux/store";
function App() {
  
  return(
  <Provider store={store}>
      <Form_modal/>
  </Provider>);
}

export default App;
