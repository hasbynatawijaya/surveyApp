import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/ConfigureStore";

import "../src/static/styles/styles.css";

import Home from "./components/home/Home";
import MasterQuestionnaire from "./components/admin/questionnaire/MasterQuestionnaire";
import MasterQuestionnaireAdd from "./components/admin/questionnaire/MasterQuestionnaireAdd";
import MasterQuestionnaireEdit from "./components/admin/questionnaire/MasterQuestionnaireEdit";
import Questionnaire from "./components/admin/questionnaire/Questionnaire";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <DefaultLayout>
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
          <Route
            exact
            path="/masterquestionnaire/edit"
            component={MasterQuestionnaireEdit}
          />
          <Route exact path="/questionnaire" component={Questionnaire} />
        </DefaultLayout>
      </Switch>
    </Provider>
  );
}

export default App;
