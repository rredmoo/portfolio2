import styled from "styled-components";

export const ProjectBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--bg-dark, #0b0f1a);
  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: -20%;
    filter: blur(120px);
  }

  &::before {
    background: radial-gradient(
      ellipse at top,
      rgba(255, 90, 150, 0.08),
      transparent 70%
    );
  }

  &::after {
    background: radial-gradient(
      ellipse at right,
      rgba(80, 180, 255, 0.08),
      transparent 70%
    );
  }

  .canvas-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  > *:not(.canvas-bg) {
    position: relative;
    z-index: 1;
    pointer-events: auto;
  }
`;

export const AllProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

export const Card = styled.article`
  background-color: #260d5578;
  box-shadow: 0 0 15px rgba(117, 5, 187, 0.69);
  padding: 20px;
  border-radius: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
  width: 80%;
  max-width: 800px;
  transition: background-color 0.6s;

  &:hover {
    background-color: #1d052b4d;
  }

  h1 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    margin: 0.25rem 0;
    font-size: 0.95rem;
    opacity: 0.7;
    text-align: center;
  }

  img {
    width: 350px;
    height: 250px
    border-radius: 12px;
    padding: 1rem;
  }

  a {
    color: #8b5cf6;
    text-decoration: none;
    margin: 0.5rem 0;
  }

  a:hover {
    text-decoration: underline;
  }
`;
