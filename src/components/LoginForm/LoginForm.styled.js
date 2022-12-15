import styled from 'styled-components';

export const Form = styled.form`
  inset: 2px;
  border-radius: 8px;
  background-color: #28292d;
  padding: 100px 60px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 1.1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  color: white;
`;

export const Box = styled.div`
  position: relative;
  width: 380px;
  height: 420px;
  background: #1c1c1c;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: #45f3ff;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.1em;
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1em;
  letter-spacing: 0.05em;
  margin-top: 10px;
`;

export const I = styled.i`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #45f3ff;
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: #45f3ff;
  padding: 11px 25px;
  width: 100px;
  margin-top: px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
`;
