import styled from 'styled-components';

export const Nav = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const NavItem = styled.li`
  padding: 0;
  margin-right: 0.5rem;
  cursor: pointer;
  border-bottom: ${props => (props.selected ? 'solid 1px black' : 'none') };
`;

