import styled from "styled-components";

export const ProjectBackground = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #0e121f;

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
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
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
`;

export const FeaturedCard = styled.div`
  & article {
    height: 100%;
  }

  & img {
    max-height: 200px;
  }
`;

export const Card = styled.article`
  position: relative;
  padding: clamp(1rem, 1.5vw, 1.25rem);

  background-color: rgba(20, 24, 39);
  border: solid 1px rgba(232, 232, 232, 0.2);
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 0;
  width: 100%;
  max-width: min(100%, 46rem);
  transition: background-color 0.6s;

  article {
    overflow: hidden;
  }

  h1 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    margin: 0.25rem 0;
    font-size: 0.95rem;
    opacity: 0.7;
    text-align: left;
    line-height: 1.4;
    font-size: clamp(0.8rem, 1vw, 0.9rem);
  }

  .skillsBanner {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    width: 100%;
    margin: 0.4rem 0;
  }

  .skill {
    padding: 0.25rem 0.5rem;

    background-color: rgba(232, 232, 232, 0.12);
    font-size: 0.65rem;
    text-align: center;
    white-space: nowrap;
    border: 1px solid rgba(232, 232, 232, 0.15);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .actions {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  .actions button {
    background-color: rgba(20, 24, 39, 0.8);
    border: solid 1px rgba(232, 232, 232, 0.25);

    padding: 0.3rem 0.5rem;
    font-size: 0.7rem;
    color: var(--color-text);
    cursor: pointer;
    backdrop-filter: blur(6px);
    transition: 0.2s;
  }

  .actions button:hover {
    background-color: rgba(232, 232, 232, 0.08);
    border-color: rgba(232, 232, 232, 0.4);
  }

  .readMore {
    cursor: pointer;
    margin-left: 4px;
    opacity: 0.8;
  }
`;

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const PopupContent = styled.div`
  position: relative;
  background: rgba(20, 24, 39, 0.95);
  border: 1px solid rgba(232, 232, 232, 0.2);
  border-radius: 12px;
  padding: 1.2rem;
  max-height: 80vh;
  overflow-y: auto;
  max-width: 500px;
  width: 90%;
  color: var(--color-text);
  animation: fadeIn 0.2s ease;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
    opacity: 0.8;
  }

  .closeBtn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: var(--color-text);
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
