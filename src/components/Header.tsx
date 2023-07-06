import { useState, useEffect } from "react";
import { useMedia } from "@hooks";
import "@stylesComponents/Header.scss";
import { actionContent, updateCurrent } from "@utils";
import executeScript from "@script";

import Logo from "@images/logo-toronto.svg";
import LogoRound from "@images/logo-round.svg";
import LogoMovile from "@images/mobile-logo.svg";

export default function Header() {
  const media = useMedia("(min-width: 768px)");
  const [shownav, setShowNav] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent(updateCurrent());
    actionContent();
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
      <div
        className={
          shownav
            ? "header__nav header__nav--show"
            : "header__nav header__nav--hide"
        }
      >
        <ul className="header__nav-box">
          <li className="header__nav-options header__logo">
            <img
              src={LogoRound}
              className="header__line-top-logo"
              alt=""
            />
          </li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">HOME</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">GTA</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">CANADA</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">POLITICS</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">WORLD</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">OPINION</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">LIFE</a></li>
          <li className="header__nav-options header__nav-options--fixed">
            <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">SPORTS</a>
          </li>
          <li className="header__nav-options header__nav-options--fixed">
            <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">ENTERTAINMENT</a>
          </li>
          <li className="header__nav-options header__nav-options--fixed">
            <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">BUSINESS</a>
          </li>
          <li className="header__nav-options header__nav-options--fixed">
            <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">PODCATS</a>
          </li>
          <li className="header__subscribe-top">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="header__buttons header__buttons--singIn header__buttons--no-decoration"
            >
              <i className="far fa-user"></i>
            </a>
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="header__buttons header__buttons--subscribe"
            >
              Special Offer
              <br />
              <span>Only $0.50/week</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="header__line-top">
        <img
          src={Logo}
          className="header__line-top-logo"
          alt=""
        />
        <div className="header__subScribe-content">
          <div className="header__singIn">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="header__buttons header__buttons--subscribe"
            >
              Special Offer
              <br />
              <span>Only $0.50/week</span>
            </a>
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="header__buttons header__buttons--singIn"
            >
              Sign In
              {" "}
              <i className="far fa-user"></i>
            </a>
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="header__buttons header__buttons--serch"
            >
              {media ? (
                <i className="fas fa-search"></i>
              ) : (
                <i className="far fa-user"></i>
              )}
            </a>
          </div>
          <div className="header__Newsletter">
            <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer" className="header__Newsletter-options">
              <i className="fas fa-envelope"></i>
              <span className="header__fas">Newsletter</span>
            </a>
            <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer" className="header__Newsletter-options">
              <i className="fas fa-file-alt"></i>
              <span className="header__fas">Today´s paper</span>
            </a>
          </div>
        </div>
      </div>
      <div className="header__nav">
        <ul className="header__nav-box">
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer" className="active">HOME</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">GTA</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">CANADA</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">POLITICS</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">WORLD</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">OPINION</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">LIFE</a></li>
          <li className="header__nav-options"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">SPORTS</a></li>
          <li className="header__nav-options header__nav-movil">
            <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">ENTERTAINMENT</a>
          </li>
          <li className="header__nav-options header__nav-movil"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">BUSINESS</a></li>
          <li className="header__nav-options header__nav-movil"><a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">PODCATS</a></li>
        </ul>
      </div>
      <div className="header__nav header__nav--two">
        <ul className="header__nav-box header__nav-box--two">
          <li className="header__nav-options header__nav-options--two header__nav-options--first">
            <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">
              Federal Politics
            </a>
          </li>
          <li className="header__nav-options header__nav-options--two">
            <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">
              Provincial Politics
            </a>
          </li>
          <li className="header__nav-options header__nav-options--two">
            <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">
              Political Opinion
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
