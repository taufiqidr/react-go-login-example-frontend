import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();
      if (content?.name) {
        setName(content.name);
      } else {
        setName("");
      }
    })();
  });
  return (
    <Routes>
      <Route path="/" element={<Nav name={name} setName={setName} />}>
        <Route index element={<Home name={name} />} />
        <Route path="login" element={<Login setName={setName} />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
