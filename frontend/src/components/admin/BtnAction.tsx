import styled from "styled-components";

export const BtnAction = styled.button`
  font-family: var(--font-main);
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  color: var(--color-text);
  background: var(--color-primary-purple);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: var(--color-hover-light-purple);
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const DataTableActionContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;
