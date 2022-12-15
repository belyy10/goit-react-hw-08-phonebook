import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: inline-block;
  background-color: #000;
  color: #fff;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;

  letter-spacing: 2px;
  font-size: 10px;
  line-height: 10px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin-left: 16px;
`;
