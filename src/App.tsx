import React from "react";
import {
  Route,
  Routes,
  useActionData,
  useSearchParams,
} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AtriclePage from "./pages/AtriclePage/AtriclePage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Article/:id" element={<AtriclePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
