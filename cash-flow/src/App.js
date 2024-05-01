import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/home/Home";
import Report from "./pages/report/Report";
import Settings from "./pages/setting/Settings";

//Components
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="app_container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
