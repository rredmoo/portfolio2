import styled from "styled-components";

export const LandingContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--bg-dark, #0b0f1a);
`;

export const LandingBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: -20%;
    filter: blur(120px);
  }

  &::before {
    background: radial-gradient(
      ellipse at bottom,
      var(--color-bg-accent-pink),
      transparent 70%
    );
  }

  &::after {
    background: radial-gradient(
      ellipse at right,
      var(--color-bg-accent-blue),
      transparent 70%
    );
  }
`;

export const LandingContent = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 100px 24px 0 24px;

  .topLable {
    letter-spacing: 2px;
    font-size: 14px;
    color: var(--color-text-light-white);
    margin-bottom: 16px;
  }

  .landingHealine {
    font-size: clamp(2.5rem, 6rem, 4.5rem);
    font-weight: 700;
    line-height: 1.1;
    color: var(--color-text);

    span {
      background: linear-gradient(90deg, #ff5f9e, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .subtext {
    // welcome to my portfolio text
    margin-top: 16px;
    max-width: 480px;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const LandingButtonsGroup = styled.div`
  position: absolute;
  bottom: 195px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 128px;
  z-index: 3;

  .primaryButtonLanding {
    padding: 18px 32px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: white;
    background: linear-gradient(90deg, #ff5f9e, #8b5cf6);
  }

  .secondaryButtonLanding {
    padding: 18px 32px;
    border-radius: 999px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.4);
    font-size: 16px;
    color: white;
    cursor: pointer;
  }
`;

export const LandingSocialButtonsGroup = styled.div`
  position: absolute;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 3;

  .circleButton {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: white;
    cursor: pointer;
    text-decoration: none;
    backdrop-filter: blur(6px);
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.4);
    }

    a{
      color: white;
    }
  }
`;
