import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { getPublicGistsApi, getGistsByNameApi } from "../api/gists";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { gistsReducer } from "./gists";
import {
  botMessage
} from "./middlewares";
import thunk from "redux-thunk";

const api = { getPublicGistsApi, getGistsByNameApi };

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile"],
};

const rootReducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  gists: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(botMessage, thunk.withExtraArgument(api),),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
}),
composeEnhancers(applyMiddleware(thunk, botMessage))
);*/

/*export const store = createStore(
  combineReducers({ 
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
  }),
  
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (args) => args
);*/
