import { useState, useEffect } from "react";
import { updateCurrent, accordion } from "@utils";
import executeScript from "@script";

import "@stylesComponents/Footer.scss";

import LogoBottom from "@images/logo-bottom.svg";
import Android from "@images/google-play.svg";
import Ios from "@images/app-store.svg";
import DollarIcon from "@images/dollaricon.png";

export default function Footer() {
  const [showAction, setShowAction] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent(updateCurrent());
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowAction(true);
      } else {
        setShowAction(false);
      }
    });
  }, []);
  return (
    <>
      <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer" className="footer__notification">
        <img src={DollarIcon} alt="" className="footer__notification-img" />
        <div className="footer__notificaction-box">
          <p className="footer__notificaction-text">Someone from Vancouver just withdrew</p>
          <button type="button" className="footer__notificaction-button">JUST NOW</button>
        </div>
      </a>
      {showAction ? (
        <div className="footer__actions">
          <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer" className="footer__actions-button">
            Try BitIQ for yourself.
          </a>
        </div>
      ) : null}
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__row">
            <div className="footer__item footer__item--logo">
              <img src={LogoBottom} className="footer__logo" alt="logo" loading="lazy" />
            </div>
            <div className="footer__item footer__item--no-padding">
              <div className="footer__row footer__row--menu">
                <div className="footer__item footer__item--responsive">
                  <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">
                    <h3 className="footer__item-title footer__item-title">About</h3>
                  </a>
                </div>
                <div className="footer__item footer__item--responsive">
                  <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">
                    <h3 className="footer__item-title footer__item-title">Contact Us</h3>
                  </a>
                </div>
                <div className="footer__item footer__item--responsive">
                  <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">
                    <h3 className="footer__item-title footer__item-title">Feedback</h3>
                  </a>
                </div>
                <div className="footer__item">
                  <h3 className="footer__item-title footer__item-title--submenu" onClick={(e) => accordion(e)}>Thestar.com</h3>
                  <ul className="footer__links">
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Subscribe to the Star</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Manage Star Subscription</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Gift a Star Subscription</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Redeem a Star Gift Subscription</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Feedback</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Removal request</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Site Map</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Newsletters</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Homefinder.ca</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Corrections</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Today&apos;s News</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Flyers</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Contests</a>
                    </li>
                  </ul>
                </div>
                <div className="footer__item">
                  <h3 className="footer__item-title footer__item-title--submenu" onClick={(e) => accordion(e)}>Toronto Star Newspapers Ltd.</h3>
                  <ul className="footer__links">
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Subscribe to Home Delivery</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Manage Home Delivery Subscription</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Corporate Group Subscriptions</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">About</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Torstar Journalistic Standards</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Atkinson Principles</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Glossary</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Trust Project</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Contact Us</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Contact Webmaster</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">FAQ</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">News Releases</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Star Internships</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Careers @ the Star</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Star ePaper Edition</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Reprint and License</a>
                    </li>
                  </ul>
                </div>
                <div className="footer__item">
                  <h3 className="footer__item-title footer__item-title--submenu" onClick={(e) => accordion(e)}>Advertising</h3>
                  <ul className="footer__links">
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Advertise with Us</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Advertising Terms</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Special Features</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Election Ads Registry</a>
                    </li>
                  </ul>
                </div>
                <div className="footer__item">
                  <h3 className="footer__item-title footer__item-title--submenu" onClick={(e) => accordion(e)}>Initiatives</h3>
                  <ul className="footer__links">
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Santa Claus Fund</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Fresh Air Fund</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Star Advisers</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Classroom Connection</a>
                    </li>
                    <li className="footer__links-item">
                      <a className="footer__links-anchor" href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer">Toronto Star Archives</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__networks">
            <div className="footer__networks-icons">
              <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer" className="footer__networks-anchor">
                <i className="fab fa-facebook-f footer__networks-icon"></i>
              </a>
              <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer" className="footer__networks-anchor">
                <i className="fab fa-twitter footer__networks-icon"></i>
              </a>
              <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer" className="footer__networks-anchor">
                <i className="fab fa-youtube footer__networks-icon"></i>
              </a>
              <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer" className="footer__networks-anchor">
                <i className="fab fa-instagram footer__networks-icon"></i>
              </a>
            </div>
            <div className="footer__networks-stores">
              <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer" className="footer__networks-store">
                <img className="footer__networks-store__img" src={Android} alt="" />
              </a>
              <a href={current} onClick={() => executeScript()} target="_blank" rel="noopener noreferrer" className="footer__networks-store">
                <img className="footer__networks-store__img" src={Ios} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__terms">
          <div className="footer__terms-legals">
            <p className="footer__terms-legals-txt">Privacy Policy</p>
            <p className="footer__terms-legals-txt">Terms of use</p>
            <p className="footer__terms-legals-txt">Accessibility</p>
          </div>
          <div className="footer__terms-legals">
            <p className="footer__terms-legals-txt">
              © 2022 Copyright. All Rights reserved.
            </p>
          </div>
        </div>
        <div className="footer__action-bottom">
          <div className="footer__terms-legals">
            <button type="button" className="footer__terms-legals-txt"></button>
          </div>
        </div>
      </footer>
    </>
  );
}
