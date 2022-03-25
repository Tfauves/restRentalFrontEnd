import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/Routers/AppRouter";
import { AuthProvider } from "./components/Auth/Providers/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
