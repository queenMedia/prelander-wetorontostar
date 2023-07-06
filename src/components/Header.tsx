import { useEffect, useState } from "react";

import { actionContent, updateCurrent } from "@utils";
import executeScript from "@script";

/* eslint-disable max-len */
import "@stylesComponents/Header.scss";

export default function Header() {
  const [current, setCurrent] = useState("");

  const HeaderScroll = () => {
    window.addEventListener("scroll", (e) => {
      const position = window.scrollY;
      const width = window.innerWidth || document.documentElement.clientWidth;
      const menu = document.getElementById("menu_header");
      if (typeof position === "number" && position >= 60 && width > 768) {
        menu?.classList.add("header--special");
      } else {
        menu?.classList.remove("header--special");
      }
    });
  };

  useEffect(() => {
    setCurrent(updateCurrent());
    HeaderScroll();
    actionContent();
  }, []);

  return (
    <header className="header" id="menu_header">
      <div className="header__line-top">
        <span className="header__line-top-logo" data-link>
          <svg
            width="71px"
            height="18px"
            viewBox="0 0 71 18"
          >
            <path
              d="M12.2646923,8.95707692 C12.2646923,10.719 10.8364615,12.1472308 9.07476923,12.1472308 C7.31307692,12.1472308 5.88484615,10.719 5.88484615,8.95707692 C5.88484615,7.19538462 7.31307692,5.76738462 9.07476923,5.76738462 C10.8364615,5.76738462 12.2646923,7.19538462 12.2646923,8.95707692"
              id="Fill-1"
              fill="#D8232A"
            >
            </path>
            <path
              d="M5.39307692,12.147 C3.63,12.147 2.20130769,10.719 2.20130769,8.95753846 C2.20130769,7.19561538 3.63,5.766 5.39284615,5.766 L5.39307692,12.147"
              id="Fill-2"
              fill="#D8232A"
            >
            </path>
            <path
              d="M12.7596923,15.6664615 L12.7603846,12.6394615 L15.7887692,12.6408462 C15.7887692,14.3141538 14.4323077,15.6664615 12.7596923,15.6664615"
              id="Fill-3"
              fill="#D8232A"
            >
            </path>
            <path
              d="M5.39284615,2.24469231 L5.39284615,5.27538462 L2.36053846,5.27584615 C2.36053846,3.60207692 3.71861538,2.24469231 5.39284615,2.24469231"
              id="Fill-4"
              fill="#D8232A"
            >
            </path>
            <path
              d="M5.39307692,15.6683077 L5.39307692,12.6394615 L2.36123077,12.6408462 C2.36123077,14.3139231 3.71792308,15.6683077 5.39307692,15.6683077"
              id="Fill-5"
              fill="#D8232A"
            >
            </path>
            <path
              d="M16.4455385,11.6986154 L16.4439231,6.21623077 C17.3778462,6.77238462 18.0034615,7.79169231 18.0034615,8.95753846 C18.0034615,10.1229231 17.3778462,11.1413077 16.4455385,11.6986154"
              id="Fill-6"
              fill="#D8232A"
            >
            </path>
            <path
              d="M6.33484615,1.58861538 L11.8174615,1.58953846 C11.2610769,0.655615385 10.2429231,0.0311538462 9.07684615,0.0311538462 C7.911,0.0311538462 6.89123077,0.655615385 6.33484615,1.58861538"
              id="Fill-7"
              fill="#D8232A"
            >
            </path>
            <path
              d="M11.7770769,16.3255385 L6.29353846,16.3248462 C6.85015385,17.2583077 7.869,17.8841538 9.03530769,17.8841538 C10.2011538,17.8841538 11.22,17.259 11.7770769,16.3255385"
              id="Fill-8"
              fill="#D8232A"
            >
            </path>
            <path
              d="M12.2658462,12.6408462 C12.2658462,14.4032308 10.8380769,15.831 9.07661538,15.831 C7.31423077,15.831 5.88484615,14.4032308 5.88484615,12.6408462 L12.2658462,12.6408462"
              id="Fill-9"
              fill="#D8232A"
            >
            </path>
            <path
              d="M12.7603846,12.147 C14.5220769,12.147 15.9514615,10.719 15.9514615,8.95753846 C15.9514615,7.19561538 14.5220769,5.766 12.7603846,5.766 L12.7603846,12.147"
              id="Fill-10"
              fill="#D8232A"
            >
            </path>
            <path
              d="M12.2658462,5.27907692 C12.2658462,3.51738462 10.8380769,2.08938462 9.07661538,2.08938462 C7.31423077,2.08938462 5.88484615,3.51738462 5.88484615,5.27907692 L12.2658462,5.27907692"
              id="Fill-11"
              fill="#D8232A"
            >
            </path>
            <path
              d="M1.70769231,11.6986154 L1.70907692,6.21623077 C0.774923077,6.77238462 0.150461538,7.79169231 0.150461538,8.95753846 C0.150461538,10.1229231 0.774923077,11.1413077 1.70769231,11.6986154"
              id="Fill-12"
              fill="#D8232A"
            >
            </path>
            <path
              d="M15.789,5.277 L12.7603846,5.27538462 L12.7596923,2.24746154 C14.4325385,2.24746154 15.789,3.60323077 15.789,5.277"
              id="Fill-13"
              fill="#D8232A"
            >
            </path>
            <path
              d="M29.9725385,17.8790769 C24.8926154,17.8790769 21.1197692,13.9583077 21.1197692,9.00184615 L21.1197692,8.95246154 C21.1197692,4.04538462 24.8187692,0.0258461538 30.1204615,0.0258461538 C33.3752308,0.0258461538 35.3233846,1.11092308 36.9263077,2.68915385 L34.5096923,5.47546154 C33.1781538,4.26738462 31.8219231,3.52753846 30.0957692,3.52753846 C27.186,3.52753846 25.0899231,5.94415385 25.0899231,8.90330769 L25.0899231,8.95246154 C25.0899231,11.9116154 27.1366154,14.3776154 30.0957692,14.3776154 C32.0683846,14.3776154 33.2769231,13.5883846 34.6331538,12.3553846 L37.0495385,14.7966923 C35.2742308,16.6954615 33.3013846,17.8790769 29.9725385,17.8790769"
              id="Fill-14"
              fill="#1A1919"
            >
            </path>
            <path
              d="M49.5923077,12.4465385 C49.5923077,11.2479231 48.6999231,10.5083077 46.6848462,10.5083077 L42.1451538,10.5083077 L42.1451538,14.436 L46.8124615,14.436 C48.5469231,14.436 49.5923077,13.8237692 49.5923077,12.4977692 L49.5923077,12.4465385 Z M48.5976923,5.30538462 C48.5976923,4.13215385 47.6796923,3.46915385 46.0218462,3.46915385 L42.1451538,3.46915385 L42.1451538,7.24361538 L45.7668462,7.24361538 C47.5010769,7.24361538 48.5976923,6.68261538 48.5976923,5.35638462 L48.5976923,5.30538462 Z M46.8124615,17.8790769 L38.3194615,17.8790769 L38.3194615,0.0258461538 L46.6084615,0.0258461538 C50.2555385,0.0258461538 52.5,1.83669231 52.5,4.64238462 L52.5,4.69338462 C52.5,6.70823077 51.4287692,7.83023077 50.1535385,8.54446154 C52.2193846,9.33507692 53.4946154,10.5336923 53.4946154,12.9313846 L53.4946154,12.9823846 C53.4946154,16.2468462 50.8421538,17.8790769 46.8124615,17.8790769 L46.8124615,17.8790769 Z"
              id="Fill-15"
              fill="#1A1919"
            >
            </path>
            <path
              d="M63.4393846,17.8790769 C58.3596923,17.8790769 54.5868462,13.9583077 54.5868462,9.00184615 L54.5868462,8.95246154 C54.5868462,4.04538462 58.2856154,0.0258461538 63.5875385,0.0258461538 C66.8423077,0.0258461538 68.7904615,1.11092308 70.3933846,2.68915385 L67.9767692,5.47546154 C66.645,4.26738462 65.2887692,3.52753846 63.5626154,3.52753846 C60.6530769,3.52753846 58.557,5.94415385 58.557,8.90330769 L58.557,8.95246154 C58.557,11.9116154 60.6036923,14.3776154 63.5626154,14.3776154 C65.5354615,14.3776154 66.7437692,13.5883846 68.1,12.3553846 L70.5166154,14.7966923 C68.7413077,16.6954615 66.7682308,17.8790769 63.4393846,17.8790769"
              id="Fill-16"
              fill="#1A1919"
            >
            </path>
          </svg>
        </span>
        <div className="header__subScribe-content">
          <div className="header__singIn">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__buttons header__buttons--subscribe"
              rel="noreferrer"
            >
              MENU
              <span className="header__arrow">
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__buttons header__buttons--singIn"
              rel="noreferrer"
            >
              <i className="fas fa-search"></i>
              Search
            </a>
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__buttons header__buttons--serch"
              rel="noreferrer"
            >
              <i className="far fa-user"></i>
              Sign In
            </a>
          </div>
          {/* <div className="header__Newsletter">
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
          </div> */}
        </div>
      </div>
      <div className="header__nav">
        <ul className="header__nav-box">
          <li className="header__nav-options header__nav-options--news">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__nav-options__link"
              rel="noreferrer"
            >
              NEWS
            </a>
          </li>
          <li className="header__nav-options">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__nav-options__link"
              rel="noreferrer"
            >
              Top
            </a>
          </li>
          <li className="header__nav-options">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__nav-options__link"
              rel="noreferrer"
            >
              Local
            </a>
          </li>
          <li className="header__nav-options">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__nav-options__link"
              rel="noreferrer"
            >
              Covid-19
            </a>
          </li>
          <li className="header__nav-options">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__nav-options__link"
              rel="noreferrer"
            >
              Climate
            </a>
          </li>
          <li className="header__nav-options">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__nav-options__link"
              rel="noreferrer"
            >
              World
            </a>
          </li>
          <li className="header__nav-options">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__nav-options__link"
              rel="noreferrer"
            >
              Canada
            </a>
          </li>
          <li className="header__nav-options">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__nav-options__link"
              rel="noreferrer"
            >
              Politics
            </a>
          </li>
          <li className="header__nav-options">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__nav-options__link"
              rel="noreferrer"
            >
              Indigenous
            </a>
          </li>
          <li className="header__nav-options header__nav-movil">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__nav-options__link"
              rel="noreferrer"
            >
              Opinion
            </a>
          </li>
          <li className="header__nav-options header__nav-movil header__nav-options--more">
            <a
              href={current}
              onClick={() => executeScript()}
              target="_blank"
              type="button"
              className="header__nav-options__link"
              rel="noreferrer"
            >
              More
              <span>
                <i className="fas fa-chevron-down header__nav-arrow--more "></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="header__nav header__nav--two">
      </div>
    </header>
  );
}
