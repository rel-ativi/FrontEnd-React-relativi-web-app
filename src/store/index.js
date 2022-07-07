import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import reducerImagem from "./modules/ImagesReel/reducer";
import reducerTema from "./modules/theme/reducer";

const reducers = combineReducers({
  tema: reducerTema,
  imagem: reducerImagem,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
