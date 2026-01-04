import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../auth";
import { login } from "../api/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const data = await login(email, password);
    setToken(data.token);
    navigate("/admin");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
}
