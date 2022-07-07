export default function reducerTema(state = true, { type, payload }) {
  switch (type) {
    case "@theme/CHANGE":
      return (state = payload);
    default:
      return state;
  }
}
