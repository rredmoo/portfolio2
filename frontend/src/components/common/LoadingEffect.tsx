import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid var(--color-primary-purple);
  border-top-color: var(--color-border);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingSpinner />
      <span>Ielādē Datus...</span>
    </LoadingContainer>
  );
}
