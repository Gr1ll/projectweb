import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Soon from "./pages/soon/Soon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/soon" Component={Soon} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
