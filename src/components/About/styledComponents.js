import styled from 'styled-components'

export const AboutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`

export const AboutCardSm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const AboutCardLg = styled(AboutCardSm)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const AboutImage = styled.img`
  width: 70%;
`
