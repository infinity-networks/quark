import "./App.less";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import EditPage from "./pages/edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </>
  );
}

export default App;
