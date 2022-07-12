import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import atividadesReducer from "./modules/atividades/reducer";
import perfilUsuarioReducer from "./modules/perfilUsuario/reducer";

import reducerTema from "./modules/theme/reducer";

const reducers = combineReducers({
  tema: reducerTema,
  atividades: atividadesReducer,
  perfilUsuario: perfilUsuarioReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
