import styled from 'styled-components';

export const FormBlock = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 2rem;
`;

export const FormInput = styled.input`
  margin: 0.5em;
  padding: 5px;
  line-height: 1.5em;
  border-radius: 10px;
  grid-column: 2 / 3;
`;

export const FormLabel = styled.label`
  margin: 0.5em;
  padding: 5px;
  line-height: 1.5em;
  text-align: right;
  grid-column: 1 / 2;
`;

export const FormArea = styled.textarea`
  margin: 0.5em;
  padding: 5px;
  border-radius: 10px;
  grid-column 2 / 3;
`;

export const FormSubmit = styled.div`
  grid-column 2 / 3;
`;

