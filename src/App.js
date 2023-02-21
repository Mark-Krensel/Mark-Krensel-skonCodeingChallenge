import "./App.css";
import { useState } from "react";
import Navigation from "./components/Navigation";
import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  return (
    // <div className="App">
    //   <header className="App-header">Marks Codeing Challenge</header>
    // </div>
    <>
      <Routes>
        <Route path="/" element={<HomePage onCreateUser={createUser} />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="*" element={<h1>This page does not exist</h1>} />
      </Routes>

      <Navigation />
    </>
  );

  function createUser(name) {
    setUser(name);
    navigate("/about");
  }
}

export default App;
