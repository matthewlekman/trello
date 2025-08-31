import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import makeStore from "./store";
import MainLayout from "./layouts/MainLayout";
import RegistrationsNew from "./views/registrations/New";

// This is your main React app. It uses MainLayout and sets up routing.
function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<RegistrationsNew />} />
      </Routes>
    </MainLayout>
  );
}

const store = makeStore();
const container = document.getElementById("main_container");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);