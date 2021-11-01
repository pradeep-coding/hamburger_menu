import {
  NotFoundContainer,
  NotFoundCard,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundCard>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Lost Your Way?</NotFoundHeading>
      <NotFoundDescription>
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </NotFoundDescription>
    </NotFoundCard>
  </NotFoundContainer>
)

export default NotFound
