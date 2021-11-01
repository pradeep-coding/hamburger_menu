import {
  AboutContainer,
  AboutCardSm,
  AboutCardLg,
  AboutImage,
} from './styledComponents'

const About = () => (
  <AboutContainer>
    <AboutCardSm>
      <AboutImage
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
    </AboutCardSm>
    <AboutCardLg>
      <AboutImage
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </AboutCardLg>
  </AboutContainer>
)

export default About
