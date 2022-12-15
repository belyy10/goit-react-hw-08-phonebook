import styled from 'styled-components';

export const Section = styled.div`
  top: 50%;
  background-color: white;
  border-radius: 3%;
  width: 420px;
`;

export const Form = styled.form`
  border: 1px solid black;
`;
export const Label = styled.label`
  left: 20px;
  bottom: 11px;
  font-family: Lusitana, serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: #888;
  cursor: text;
  transition: transform 0.2s ease-in-out;
  margin-left: 16px;
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
  margin-left: 16px;

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

export const Button = styled.button`
  display: inline-block;
  background-color: #000;
  color: #fff;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin-left: 16px;
`;
export const Title = styled.h2`
  text-align: center;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 36px;
  line-height: 48px;
`;

export const FormField = styled.div`
  margin: 32px 0;
`;
