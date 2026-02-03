import styled from "styled-components";

export const ResumeBackground = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: var(--bg-dark, #0b0f1a);

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: -30%;
    filter: blur(160px);
    opacity: 0.6;
  }

  &::before {
    background: radial-gradient(
      ellipse at bottom left,
      rgba(80, 180, 255, 0.06),
      transparent 70%
    );
  }

  &::after {
    background: radial-gradient(
      ellipse at bottom right,
      rgba(255, 90, 150, 0.05),
      transparent 70%
    );
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const ResumeField = styled.section`
  background-color: rgba(20, 24, 39);
  border-radius: 37px;
  padding: 2rem;
  width: 100%;
  margin: 3rem auto;
  box-shadow: 0 0 35px rgba(40, 53, 140, 0.35);
  transition: all 0.3s ease-in-out;
  position: relative;

  .downloadBtn {
    padding: 0.5rem;
    background-color: gray;
    border-radius: 12px;
    position: absolute;
    cursor: pointer;
    top: 25px;
    right: 25px;

    .tooltipText {
      visibility: hidden;
      width: 130px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      position: absolute;
      top: 110%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }

    &:hover .tooltipText {
      visibility: visible;
    }
  }

  .resumeSections{
    margin: 1rem 2rem 0rem;
  }

  .smallText {
    color: #939393;
    margin: 0;
    font-size: 0.9rem;
    margin-left: 2rem;
  }

  .subTitleText {
    color: #d1d1d1;
    font-weight: 400;
    margin: 0;
    font-size: 0.95rem;
  }

  .tree {
    font-family: "JetBrains Mono", monospace;
    color: #d1d1d1;
    background: transparent;
    margin: 0;
    white-space: pre;
  }
`;

export const Dot = styled.span<{ active?: boolean }>`
  height: 10px;
  width: 10px;
  margin-right: 5px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${({ active }) => (active ? "#cee348" : "#bbb")};
`;
