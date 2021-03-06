import styled from 'styled-components';

export const  Container = styled.div`
  grid-area: AS;
  
  padding-left: 20px;
  border-right: 1px solid ${ props => props.theme.colors.gray };
  background-color:${ props => props.theme.colors.secondary };
`;

export const  Header = styled.header`
  display: flex;
  height: 70px;
  align-items: center;
  padding: 10px;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const Title = styled.h3`
  color: ${ props => props.theme.colors.white };
  margin-left: 10px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
  color: ${ props => props.theme.colors.info };
  text-decoration: none;

  margin: 7px 0;
  display: flex;
  align-items: center;

  transition: opacity .3s;

  &:hover {
    opacity: .7;
  };

  > svg {
    font-size: 18px;
    margin-right: 5px;
  };
  
`;