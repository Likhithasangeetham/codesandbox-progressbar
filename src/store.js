import { createStore, applyMiddleware, compose } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

import thunk from "redux-thunk";
import rootReducer from "./reducer";

// const persistConfig = {
//   key: "root",
//   storage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};
const middleware = [thunk];

export default () => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware)
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};
