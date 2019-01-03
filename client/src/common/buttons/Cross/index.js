import React from 'react';
import styled from 'styled-components';
 
const cross_symbol = String.fromCharCode( 10799);

const Cross = styled.button`
  color: red;
  font-weight: bold;
  background-color: white;
  border-radius: 100%;
  border-color: #555;
  margin: 0;
  padding: 0.3em 0.3em;
  line-height: 0.9em;
  outline: none;
`;

const CrossButton = ({ onClick }) => (
  <Cross onClick={onClick} >
    { cross_symbol }
  </Cross>
);

export default CrossButton;

