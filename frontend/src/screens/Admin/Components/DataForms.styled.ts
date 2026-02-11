import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 720px;
`;

// holds each individual component inside formwrapper
export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormLabel = styled.label`
  font-size: 13px;
  font-weight: 600;
  opacity: 0.8;
`;

export const FormInput = styled.input`
  padding: 11px 14px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-secondary);
  color: var(--color-text);
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: var(--color-primary-purple);
  }
`;

export const FormTextarea = styled.textarea`
  padding: 11px 14px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-secondary);
  color: var(--color-text);
  font-size: 14px;
  min-height: 130px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--color-primary-purple);
  }
`;

export const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 16px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;

  background: var(--color-primary-purple);
  color: white;

  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;