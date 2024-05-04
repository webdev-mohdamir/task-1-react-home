import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";

/* Bootstrap configration*/
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Moveing index.css to make it priority
import "./index.css";
import Auth from "./pages/Auth.tsx";
import SignupBox from "./components/auth/SignupBox.tsx";
import LoginBox from "./components/auth/LoginBox.tsx";
import AuthContextProvider from "@/components/context/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/auth" element={<Auth />}>
              <Route index element={<SignupBox />} />
              <Route path="*" element={<SignupBox />} />
              <Route path="login" element={<LoginBox />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
