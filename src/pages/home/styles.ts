import styled from 'styled-components';

const Wrapper = styled.main`
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  background: ${({ theme }) => theme.colors.white};
  max-width: 920px;
`;

const Title = styled.h1`
  font-size: 5.6rem;
  text-align: center;
  align-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export { Wrapper, Title };
