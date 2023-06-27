import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="model/:id" element={<Home />} />
    </Routes>
  );
}

export default App;
