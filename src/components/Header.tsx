import { useState, useEffect } from "react";
import { useMedia } from "@hooks";
import "@stylesComponents/Header.scss";

import Logo from "@images/logo.svg";
import LogoMovile from "@images/mobile-logo.svg";

export default function Header() {
  const media = useMedia("(min-width: 768px)");
  console.log({ media });
  const [shownav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);

  return (
    <header className="header">
      <div className={shownav ? "header__nav header__nav--show" : "header__nav header__nav--hide"}>
        <ul className="header__nav-box">
          <li className="header__nav-options">HOME</li>
          <li className="header__nav-options">GTA</li>
          <li className="header__nav-options">CANADA</li>
          <li className="header__nav-options">POLITICS</li>
          <li className="header__nav-options">WORLD</li>
          <li className="header__nav-options">OPINION</li>
          <li className="header__nav-options">LIFE</li>
          <li className="header__nav-options header__nav-options--fixed">SPORTS</li>
          <li className="header__nav-options header__nav-options--fixed">ENTERTAINMENT</li>
          <li className="header__nav-options header__nav-options--fixed">BUSINESS</li>
          <li className="header__subscribe-top">
            <button
              type="button"
              className="header__buttons header__buttons--subscribe"
            >
              Subscribe Now
            </button>
          </li>
        </ul>
      </div>
      <div className="header__line-top">
        <img src={media ? Logo : LogoMovile} className="header__line-top-logo" alt="" />
        <div className="header__subScribe-content">
          <div className="header__singIn">
            <button
              type="button"
              className="header__buttons header__buttons--subscribe"
            >
              Subscribe Now
            </button>
            <button
              type="button"
              className="header__buttons header__buttons--singIn"
            >
              Sign In
            </button>
            <button
              type="button"
              className="header__buttons header__buttons--serch"
            >
              {
                media ? <i className="fas fa-search"></i> : <i className="far fa-user"></i>
              }
            </button>
          </div>
          <div className="header__Newsletter">
            <button type="button" className="header__Newsletter-options">
              <i className="fas fa-file-audio"></i>
              <span className="header__fas">Podcasts</span>
            </button>
            <button type="button" className="header__Newsletter-options">
              <i className="fas fa-envelope"></i>
              <span className="header__fas">Newsletter</span>
            </button>
            <button type="button" className="header__Newsletter-options">
              <i className="fas fa-file-alt"></i>
              <span className="header__fas">Today´s paper</span>
            </button>
          </div>
        </div>
      </div>
      <div className="header__nav">
        <ul className="header__nav-box">
          <li className="header__nav-options">HOME</li>
          <li className="header__nav-options">GTA</li>
          <li className="header__nav-options">CANADA</li>
          <li className="header__nav-options">POLITICS</li>
          <li className="header__nav-options">WORLD</li>
          <li className="header__nav-options">OPINION</li>
          <li className="header__nav-options">LIFE</li>
          <li className="header__nav-options">SPORTS</li>
          <li className="header__nav-options header__nav-movil">ENTERTAINMENT</li>
          <li className="header__nav-options header__nav-movil">BUSINESS</li>
        </ul>
      </div>
      <div className="header__nav header__nav--two">
        <ul className="header__nav-box header__nav-box--two">
          <li className="header__nav-options header__nav-options--two">
            Federal Politics
          </li>
          <li className="header__nav-options header__nav-options--two">
            Provincial Politics
          </li>
          <li className="header__nav-options header__nav-options--two">
            Political Opinion
          </li>
        </ul>
      </div>
    </header>
  );
}
