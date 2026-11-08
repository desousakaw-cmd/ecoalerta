import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import OccurrencesPage from "./pages/OccurrencesPage";
import CreateOccurrencePage from "./pages/CreateOccurrencePage";

function App() {

  return (

      <BrowserRouter>

        <Routes>

          <Route
              path="/"
              element={<LoginPage />}
          />

          <Route
              path="/register"
              element={<RegisterPage />}
          />

          <Route
              path="/dashboard"
              element={<DashboardPage />}
          />

          <Route
              path="/occurrences"
              element={<OccurrencesPage />}
          />

          <Route
              path="/occurrences/new"
              element={<CreateOccurrencePage />}
          />

        </Routes>

      </BrowserRouter>

  );
}

export default App;