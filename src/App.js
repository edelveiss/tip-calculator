import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reducer from "./state/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./App.css";
import { Form } from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Split from "./components/Split";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/split">
              <Split />
              <Footer />
            </Route>
            <Route path="/">
              <Form />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
