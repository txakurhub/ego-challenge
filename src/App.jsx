import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Model from "./pages/Model";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="model/:id" element={<Model />} />
      </Route>
    </Routes>
  );
}

export default App;
