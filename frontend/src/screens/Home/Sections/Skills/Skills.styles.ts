import styled from "styled-components";

export const Card = styled.article`
  padding: clamp(1rem, 1.5vw, 1.25rem);
  border-radius: clamp(0.5rem, 3vw, 0.7rem);
  background-color: rgba(20, 24, 39);
  border: solid 1px rgba(232, 232, 232, 0.2);

  display: flex;
  flex-direction: column; /* FIX */
  gap: 0.75rem; /* spacing */

  width: 100%;
  max-width: 46rem;

  transition: background-color 0.6s;

  &:hover {
    background-color: rgba(232, 232, 232, 0.22);
  }

  h1 {
    font-size: 1.15rem;
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
    opacity: 0.7;
    margin: 0;
  }

  .titleContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;

    p {
      font-size: 12px;
      color: gray;
      margin: 0;
      padding: 0;
    }
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  align-items: stretch;
`;

export const LevelBar = styled.div`
  width: 100%;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  overflow: hidden;

  .fillableLevelBar {
    height: 100%;
    background: linear-gradient(90deg, #4ade80, #22c55e);
    border-radius: 12px;
    transition: width 0.3s ease;
  }
`;
