import styled from "styled-components";

export const LoginField = styled.div`
  max-width: 420px;
  margin: 8rem auto;
  padding: 2.5rem;
  background: rgba(20, 24, 39, 0.9);
  border-radius: 16px;
  box-shadow: 0 0 25px rgba(40, 53, 140, 0.35);

  h1 {
    margin-bottom: 1.5rem;
    text-align: center;
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: none;
    background: #111522;
    color: #fff;
    font-size: 0.95rem;
  }

  input::placeholder {
    color: #888;
  }

  button {
    margin-top: 0.5rem;
    padding: 0.75rem;
    border: none;
    border-radius: 8px;
    background: #5a7cff;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
  }
`;
