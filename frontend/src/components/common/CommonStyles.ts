import styled from "styled-components";

/*
 * Containers
 */
export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
`;

/*
 * TEXT Components
 */
export const H1PrimaryTitle = styled.div`
  padding: 2rem;
  color: #e4e4e4;
`;

/*
 * HR Components
 */
export const HrPrimary = styled.hr`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
`;

/*
 * PAGINATION
 */
export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0;
  width: fit-content;
  margin: 0 auto;

  & button {
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    background-color: rgba(20, 24, 39);
    color: white;
    border: none;
    font-size: 0.9rem;
    cursor: pointer;
    white-space: nowrap;
  }

  & button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & p {
    margin: 0;
    font-size: 0.85rem;
    opacity: 0.8;
    white-space: nowrap;
  }
`;
