import { change } from "./actionTypes";

const initialImg =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80";

export default function ImagemReducer(state = initialImg, action) {
  switch (action.type) {
    case change:
      return action.data;
    default:
      return state;
  }
}
