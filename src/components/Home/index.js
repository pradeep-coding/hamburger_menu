import {
  HomeContainer,
  HomeCardSm,
  HomeCardLg,
  HomeImage,
} from './styledComponents'

const Home = () => (
  <HomeContainer>
    <HomeCardSm>
      <HomeImage
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
    </HomeCardSm>
    <HomeCardLg>
      <HomeImage
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </HomeCardLg>
  </HomeContainer>
)

export default Home
