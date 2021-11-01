import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {
  NavBarContainer,
  NavBar,
  WebsiteLogo,
  ModalItems,
  ModalItem,
  NavPathName,
} from './styledComponents'

import './index.css'

const Header = () => (
  <NavBarContainer>
    <NavBar>
      <Link to="hamburger_menu/" className="nav-link">
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="ham-burger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="ham-burger-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="modal-container">
              <button
                type="button"
                className="close-button"
                data-testId="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="nav-icon" />
              </button>
              <ModalItems>
                <Link
                  to="hamburger_menu/"
                  className="nav-link"
                  onClick={() => close()}
                >
                  <ModalItem>
                    <AiFillHome className="nav-icon" />
                    <NavPathName>Home</NavPathName>
                  </ModalItem>
                </Link>
                <Link
                  to="hamburger_menu/about"
                  className="nav-link"
                  onClick={() => close()}
                >
                  <ModalItem>
                    <BsInfoCircleFill className="nav-icon" />
                    <NavPathName>About</NavPathName>
                  </ModalItem>
                </Link>
              </ModalItems>
            </div>
          </>
        )}
      </Popup>
    </NavBar>
  </NavBarContainer>
)
export default Header
