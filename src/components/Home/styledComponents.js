import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`

export const HomeCardSm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HomeCardLg = styled(HomeCardSm)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const HomeImage = styled.img`
  width: 70%;
`
