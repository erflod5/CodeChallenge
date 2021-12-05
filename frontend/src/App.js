import { Provider } from "react-redux";
import TextList from "./components/textList";
import TextAdd from "./components/textAdd";
import { Container } from "react-bootstrap";
import { TextAlert } from "./components/textAlert";

function App({ store }) {
  return (
    <Provider store={store}>
      <Container className="mt-4">
        <TextAdd />
        <TextAlert />
        <TextList />
      </Container>
    </Provider>
  );
}

export default App;
