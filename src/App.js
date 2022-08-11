import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditUser from "./Components/EditUser";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
