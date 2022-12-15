import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: block;

  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #000;
  font-family: Lusitana, serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;

  &:focus {
    outline: none;
  }

  &:focus,
  &.not-empty {
    + .label {
      transform: translateY(-24px);
    }
  }
`;
