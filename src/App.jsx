import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import ReciclajeList from "./components/ReciclajeList";

import Form from "./components/Form";
import { PuntosProvider } from "./contexts/PuntosProvider";
import Reciclaje from "./components/Reciclaje";
import Account from "./components/Account";

import { AuthProvider } from "./contexts/UserProvider";
import SolicitudesList from "./components/SolicitudesList";

function App() {
  return (
    <AuthProvider>
      <PuntosProvider>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={<Homepage />}
            />
            <Route
              path="product"
              element={<Product />}
            />
            <Route
              path="pricing"
              element={<Pricing />}
            />
            <Route
              path="login"
              element={<Login />}
            />
            <Route
              path="app"
              element={<AppLayout />}
            >
              <Route
                index
                element={
                  <Navigate
                    replace
                    to="puntos"
                  />
                }
              />
              <Route
                path="puntos"
                element={<ReciclajeList />}
              />
              <Route
                path="puntos/:id"
                element={<Reciclaje />}
              />
              <Route
                path="solicitudes"
                element={<SolicitudesList />}
              />
              <Route
                path="basural"
                element={<ReciclajeList />}
              />
              <Route
                path="form"
                element={<Form />}
              />
              <Route
                path="user"
                element={<Account />}
              />
            </Route>
            <Route
              path="*"
              element={<PageNotFound />}
            />
          </Routes>
        </BrowserRouter>
      </PuntosProvider>
    </AuthProvider>
  );
}

export default App;
