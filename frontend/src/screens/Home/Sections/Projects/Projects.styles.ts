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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  gap: 1rem;
  width: 100%;
`;

/*
 * right side of the grid, 2 projects stacked up in a column
 * left side (single column) is ProjectCard itself wrapped in FeaturedCard
 */
export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 800px;

  & > article {
    flex: 1;
  }

  & img {
    height: 220px;
  }
`;

export const FeaturedCard = styled.div`
  height: 850px;
  & article {
    height: 100%;
  }

  & img {
    height: 320px;
  }
`;

export const Card = styled.article`
  position: relative;
  padding: 20px;
  border-radius: 37px;
  background-color: rgba(20, 24, 39);
  border: solid 2px rgba(232, 232, 232, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  width: 100%;
  max-width: 800px;
  transition: background-color 0.6s;

  &:hover {
    background-color: rgba(232, 232, 232, 0.22);
  }

  article {
    overflow: hidden;
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

  .skillsBanner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    width: 100%;
    margin: 0.5rem 0;
  }

  .skill {
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    background-color: rgba(232, 232, 232, 0.22);
    font-size: 0.8rem;
    text-align: center;
    white-space: nowrap;
  }

  img {
    width: 100%;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 12px;
  }

  a {
    position: absolute; /* add */
    bottom: 20px; /* adjust as needed */
    left: 20px;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a button {
    background-color: transparent;
    border: solid 2px rgba(232, 232, 232, 0.2);
    border-radius: 12px;
    padding: 0.5rem 1rem;
    color: var(--color-text);
  }
`;
