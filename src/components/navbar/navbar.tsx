import React from 'react';
import { Nav, List, ListItem } from './styles';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Ajuda</ListItem>
        <ListItem>Produtos</ListItem>
        <ListItem>Teste 4</ListItem>
      </List>
    </Nav>
  );
};

export default Navbar;
