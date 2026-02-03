import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../auth";
import { login } from "../../api/auth";
import { ProjectBackground } from "../Home/Sections/Projects/Projects.styles";
import { Container } from "../../components/common/CommonStyles";
import { LoginField } from "./Login.styles";

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
    <ProjectBackground>
      <Container>
        <LoginField>
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
          </form>
        </LoginField>
      </Container>
    </ProjectBackground>
  );

}
