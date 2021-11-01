import styled from 'styled-components'

export const NavBarContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
`

export const NavBar = styled.nav`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WebsiteLogo = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

export const ModalItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const ModalItem = styled.li`
  display: flex;
  align-items: center;
`

export const NavPathName = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
`
