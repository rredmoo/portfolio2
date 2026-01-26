import styled from "styled-components";

export const LandingContainer = styled.section` // TODO add all the color to root styles, so its not hardwired to this file
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #0b0f1a;
`;

export const LandingBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none; /* important */

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
`;

export const TopLabel = styled.div`
  letter-spacing: 2px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 16px;
`;

export const LandingHeadline = styled.h1`
  font-size: clamp(2.5rem, 6rem, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  color: #fff;

  // gradient text color
  span {
    background: linear-gradient(90deg, #ff5f9e, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Subtext = styled.p` // welcome to my portfolio text
  margin-top: 16px;
  max-width: 480px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.75);
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

export const PrimaryButton = styled.button`
  padding: 14px 28px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background: linear-gradient(90deg, #ff5f9e, #8b5cf6);
`;

export const SecondaryButton = styled.button`
  padding: 14px 28px;
  border-radius: 999px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  cursor: pointer;
`;
