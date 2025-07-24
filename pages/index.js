import React, { useState } from "react";
import "./App.css";

function App() {
  const [authMode, setAuthMode] = useState("login");

  return (
    <div className="container">
      <div className="card">
        <h2>{authMode === "login" ? "Login to Offernext" : "Create your Account"}</h2>

        <form>
          {authMode === "register" && (
            <input type="text" placeholder="Full Name" className="input" />
          )}
          <input type="email" placeholder="Email Address" className="input" />
          <input type="password" placeholder="Password" className="input" />

          <button type="submit" className="btn-primary">
            {authMode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p onClick={() => setAuthMode(authMode === "login" ? "register" : "login")} className="toggle">
          {authMode === "login"
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default App;
