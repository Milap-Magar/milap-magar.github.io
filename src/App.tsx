import Home from "./page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Milap" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
