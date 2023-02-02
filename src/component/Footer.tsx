import React from "react";
import mc from "./Footer.module.css";
import clsx from 'clsx';
import Logo from '../assets/logo.png';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';



const Footer = () => {
  return (
    <div className={mc.Footer_container}>
      <hr />
      <div className={mc.footer}>
        <div className={mc.social_links}>
          <a href="https://github.com/fuad221"><FaGithub /></a>
          <a href="https://facebook.com/fuad221"><FaFacebook /></a>
          <a href="https://www.linkedin.com/feed"><FaLinkedin /></a>
        </div>
        <div className={mc.logo_f}>
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className={clsx([mc.blur], [mc.blur_f])}></div>
      <div className={clsx([mc.blur], [mc.blur_f])}></div >
    </div >
  );
};

export default Footer;
