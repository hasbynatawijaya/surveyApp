import thunk from "redux-thunk";
import rootReducer from "../reducer/RootReducer";
import { createStore, applyMiddleware, compose } from "redux";

const middleware = [thunk];
// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["loading", "settings", "modal", "loan", "login","verify", "termlife"]
// };

const store = createStore(
  rootReducer,
  // initialState,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
