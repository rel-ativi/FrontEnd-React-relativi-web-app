import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes />
      <ToastContainer
        autoClose={2000}
        toastStyle={{
          backgroundColor: "white",
          color: "black",
          height: "100px",
        }}
      />
    </>
  );
}

export default App;
