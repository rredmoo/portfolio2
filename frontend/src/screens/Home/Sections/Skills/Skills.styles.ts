import styled from "styled-components";

export const Card = styled.article`
  padding: clamp(1rem, 1.5vw, 1.25rem);
  border-radius: clamp(0.5rem, 3vw, 0.7rem);
  background-color: rgba(20, 24, 39); // TODO add background color from root colors
  border: solid 1px rgba(232, 232, 232, 0.2); // TODO add background color from root colors
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: min(100%, 46rem);
  transition: background-color 0.6s;

  &:hover {
    background-color: rgba(232, 232, 232, 0.22); // TODO add background color from root colors
  }

  h1 {
    margin-bottom: 0.5rem;
    font-size: 1.15rem;
    font-weight: 600;
  }

  p {
    margin: 0.25rem 0;
    font-size: 0.95rem;
    opacity: 0.7;
    text-align: justify;
    text-justify: inter-word;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  align-items: stretch;
`;
