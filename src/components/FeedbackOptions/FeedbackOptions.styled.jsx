import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  width: 80px;
  height: 25px;
  border-radius: 10px;
  margin-right: 10px;
  border: 1px solid grey;
  cursor: pointer;
  transition-property: transform;
  &:hover {
    background-color: #005b96;
    color: #f9f1f1;
    transform: scale(1.1);
    transition-duration: 300ms;
  }
`;
