import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reducer from "./state/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Form } from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Split from "./components/Split";
import bgImg from "./assets/banner4.jpeg";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

const Wrapper = styled("div")`
  background-image: url(${(props) => props.img});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
`;

const AppFrame = styled("div")`
  font-family: sans-serif;
  text-align: center;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  height: 100vh;
`;

function App() {
  const [footerToggle, setFooterToggle] = useState(false);
  // const [menuToggle, setMenuToggle] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <Wrapper img={bgImg}>
          <AppFrame>
            <Header />
            <Switch>
              <Route path="/split">
                <Split />
              </Route>
              <Route path="/">
                <Form />
              </Route>
            </Switch>
            <Footer
              footerToggle={footerToggle}
              setFooterToggle={setFooterToggle}
            />
          </AppFrame>
        </Wrapper>
      </Router>
    </Provider>
  );
}

export default App;
