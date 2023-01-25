import React, { useState } from 'react';
// import { Link } from "react-scroll";
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import cm from './Header.module.css';


const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className={cm.header} id="header">
      <img src={Logo} alt="" className={cm.logo} />
      {(menuOpened === false && mobile === true) ? (
        <div
          style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className={cm.header_menu}>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              // activeClass ="active"
              to="header"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header

