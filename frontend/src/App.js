import { Provider } from "react-redux";
import TextList from "./components/textList";
import TextAdd from "./components/textAdd";
import { TextAlert } from "./components/textAlert";

function App({ store }) {
  return (
    <Provider store={store}>
      <TextAdd />
      <TextAlert />
      <TextList />
    </Provider>
  );
}

export default App;
