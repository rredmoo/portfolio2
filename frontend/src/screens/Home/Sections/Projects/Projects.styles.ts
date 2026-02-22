import styled from "styled-components";

export const ProjectBackground = styled.div`
  position: relative;
  width: 100%;
  min-height: 100svh;
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
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/*
 * right side of the grid, 2 projects stacked up in a column
 * left side (single column) is ProjectCard itself wrapped in FeaturedCard
 */
export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > article {
    flex: 1;
  }

  & img {
    height: clamp(90px, 12vw, 125px);
  }
`;

export const FeaturedCard = styled.div`

  & article {
    height: 100%;
  }

  & img {
    height: clamp(155px, 17vw, 235px);
    padding: 0.75rem 0;
  }
`;

export const Card = styled.article`
  position: relative;
  padding: clamp(1rem, 1.5vw, 1.25rem);
  border-radius: clamp(1.5rem, 3vw, 2.3rem);
  background-color: rgba(20, 24, 39);
  border: solid 1px rgba(232, 232, 232, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  width: 100%;
  max-width: min(100%, 46rem);
  transition: background-color 0.6s;
  padding-bottom: 3rem;

  &:hover {
    background-color: rgba(28, 32, 50);
  }

  article {
    overflow: hidden;
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
    font-size: clamp(0.85rem, 3.5vw, 0.95rem);
  }

  .skillsBanner {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 0.5rem;
    width: 100%;
    margin: 0.5rem 0;
  }

  .skill {
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    background-color: rgba(232, 232, 232, 0.22);
    font-size: 0.7rem;
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
    position: absolute;
    bottom: 20px;
    left: 20px;
    text-decoration: none;
  }

  a button {
    background-color: transparent;
    border: solid 2px rgba(232, 232, 232, 0.2);
    border-radius: 12px;
    padding: 0.4rem 0.6rem;
    color: var(--color-text);
    transition:
      background-color 0.3s,
      border-color 0.3s;
  }

  a button:hover {
    background-color: rgba(232, 232, 232, 0.08);
    border-color: rgba(232, 232, 232, 0.35);
  }
`;
