import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import atividadesReducer from "./modules/atividades/reducer";
import perfilProfissionalReducer from "./modules/perfilProUsers/reducer";
import perfilUsuarioReducer from "./modules/perfilUsuario/reducer";

import reducerTema from "./modules/theme/reducer";

const reducers = combineReducers({
  tema: reducerTema,
  atividades: atividadesReducer,
  perfilUsuario: perfilUsuarioReducer,
  perfilProfissional: perfilProfissionalReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
