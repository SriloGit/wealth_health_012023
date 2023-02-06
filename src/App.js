import './App.css';
import Home from "./pages/home";
import Error from './pages/error'
import Employees from "./pages/employees";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/employeeslist" element={<Employees />} />
          <Route path="/" element={<Home />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
