import { applyMiddleware, compose, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// gaurd --> isFunc == true == > dispatch attach

const store = legacy_createStore( 
  reducer,
  composeEnhancers(applyMiddleware(thunk))    // thunk middleware
);

export { store };
 