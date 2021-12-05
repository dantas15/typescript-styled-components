import styled from 'styled-components';

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.primary};
`;

const List = styled.ul`
  list-style-type: none;

  display: inline-flex;
  align-items: center;
  justify-content: flex-start;

  li:first-child {
    padding-left: 8px;
  }
  li:last-child {
    padding-right: 8px;
  }

  column-gap: 12px;
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.gray};

  padding-top: 20px;
  padding-bottom: 20px;

  a:hover {
    display: block;
    text-decoration: none;
  }
`;

export { Nav, List, ListItem };
