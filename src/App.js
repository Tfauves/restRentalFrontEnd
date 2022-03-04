import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/Routers/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
