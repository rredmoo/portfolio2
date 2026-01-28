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

export const HrPrimary = styled.hr`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
`;

export const Card = styled.article`
  background: var(--color-primary-purple);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 300px

  h3 {
    margin-bottom: 8px;
    color: var(--color-primary);
  }

  p {
    opacity: 0.85;
  }
`;
