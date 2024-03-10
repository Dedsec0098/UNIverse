import "./App.css";
import Pages from "./Components/Pages/Pages.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./Components/AppContext/AppContext.jsx";

function App() {
  return (
    <h1 className="App">
      <BrowserRouter>
        <AppContext>
          <Pages></Pages>
        </AppContext>
      </BrowserRouter>
    </h1>
  );
}

export default App;