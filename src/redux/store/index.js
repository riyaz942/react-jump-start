import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { createLogger } from "redux-logger";
import rootReducer from "../reducer";
import { apiMiddleware } from "redux-api-middleware";
import apiAuthInjector from "../middleware/authInjectorMiddleware";

export const configureStore = history => {
  const enhancer = compose(applyMiddleware(
    thunk,
    apiMiddleware,
    apiAuthInjector,
    createLogger(),
  ));

  // Create Store
  const store = createStore(rootReducer(history), {}, enhancer);

  if (module.hot) {
    module.hot.accept("../reducer", () =>
      store.replaceReducer(require("../reducer"))
    );
  }

  return store;
};
