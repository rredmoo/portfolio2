import styled from "styled-components";

export const ResumeBackground = styled.div`
  position: relative;
  width: 100%;
  min-height: 60vh;
  overflow: hidden;
  background-color: var(--bg-dark);

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const ResumeField = styled.section`
  background-color: rgba(20, 24, 39);
  padding: 2rem;
  border: solid 1px rgba(232, 232, 232, 0.1);
  width: 100%;
  margin: 3rem auto;
  transition: all 0.3s ease-in-out;
  position: relative;

  .downloadBtn {
    padding: 0.5rem;
    background-color: #1e2335;
    position: absolute;
    cursor: pointer;
    color: #fff;
    top: 25px;
    right: 25px;

    .tooltipText {
      visibility: hidden;
      width: 130px;
      background-color: #2b2b2b;
      color: #fff;
      text-align: center;
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

  .resumeSections {
    margin: 1rem 2rem 0rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 600;
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
  display: inline-block;
  background-color: ${({ active }) => (active ? "#cee348" : "#bbb")};
`;
