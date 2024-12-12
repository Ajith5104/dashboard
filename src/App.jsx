import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import Register from "./Register";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./Navbar";


function App() {
  return (
    <div>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;