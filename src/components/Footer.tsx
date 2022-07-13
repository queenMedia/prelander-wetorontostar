import { useState, useEffect } from "react";
import "@stylesComponents/Footer.scss";

import LogoBottom from "@images/logo-bottom.svg";
import Android from "@images/google-play.svg";
import Ios from "@images/app-store.svg";
import DollarIcon from "@images/dollaricon.png";

export default function Footer() {
  const [showAction, setShowAction] = useState(false);
  useEffect(() => {
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
      <div className="footer__notification">
        <img src={DollarIcon} alt="" className="footer__notification-img" />
        <div className="footer__notificaction-box">
          <p className="footer__notificaction-text">Someone from Vancouver just withdrew</p>
          <button type="button" className="footer__notificaction-button">JUST NOW</button>
        </div>
      </div>
      {showAction ? (
        <div className="footer__actions">
          <button type="button" className="footer__actions-button">
            Try Bitcoin Prime for yourself.
          </button>
        </div>
      ) : null}
      <footer className="footer">
        <div className="footer__redes-content">
          <div className="footer__redes-box">
            <img className="footer__logo-footer" src={LogoBottom} alt="" />
            <div className="footer__redes">
              <p className="footer__redes-txt">thestar.com</p>
              <div className="footer__socials-icons">
                <i className="fab fa-facebook-f footer__social-icons"></i>
                <i className="fab fa-twitter footer__social-icons"></i>
                <i className="fab fa-youtube footer__social-icons"></i>
                <i className="fab fa-instagram footer__social-icons"></i>
              </div>
            </div>
          </div>
          <div className="footer__play-store">
            <img className="footer__play-store-img" src={Android} alt="" />
            <img className="footer__play-store-img" src={Ios} alt="" />
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
            {/* <button type="button" className="footer__terms-legals-txt"></button> */}
          </div>
        </div>
      </footer>
    </>
  );
}
