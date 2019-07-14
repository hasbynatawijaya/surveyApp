import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/ConfigureStore";

import "../src/static/styles/styles.css";

import Home from "./components/home/Home";
import MasterQuestionnaire from "./components/admin/questionnaire/MasterQuestionnaire";
import MasterQuestionnaireAdd from "./components/admin/questionnaire/MasterQuestionnaireAdd";

function App() {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/masterquestionnaire"
            component={MasterQuestionnaire}
          />
          <Route
            exact
            path="/masterquestionnaire/add"
            component={MasterQuestionnaireAdd}
          />
        </Switch>
      </DefaultLayout>
    </Provider>
  );
}

export default App;
