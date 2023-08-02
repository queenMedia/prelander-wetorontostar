/* eslint-disable max-len */
import { useState, useEffect } from "react";
import { updateCurrent } from "@utils";
import executeScript from "@script";

import "@stylesComponents/Footer.scss";

import LogoBottom from "@images/logo-bottom.svg";
import DollarIcon from "@images/dollaricon.png";

const columns = [
  {
    title: "My Account",
    text: [
      "<p class=\"footer__Link\">Profile</p>",
      "<p class=\"footer__Link\">CBC Gem</p>",
      "<p class=\"footer__Link\">Newsletters</p>",
      "<p class=\"footer__Link\">About CBC Membership</p>"
    ]
  },
  {
    title: "Connect with CBC",
    text: [
      "<p class=\"footer__Link\">Facebook</p>",
      "<p class=\"footer__Link\">Twitter</p>",
      "<p class=\"footer__Link\">YouTube</p>",
      "<p class=\"footer__Link\">Instagram</p>",
      "<p class=\"footer__Link\">Mobile</p>",
      "<p class=\"footer__Link\">RSS</p>",
      "<p class=\"footer__Link\">Podcasts</p>"
    ]
  },
  {
    title: "Contact CBC",
    text: [
      "<p class=\"footer__Link\">Submit Feedback</p>",
      "<p class=\"footer__Link\">Help Centre</p>",
      "<p class=\"footer__Link--dark\">Audience Relations, CBC P.O. Box 500 Station A Toronto, ON Canada, M5W 1E6</p>",
      "<p class=\"footer__Link--dark\">Toll-free (Canada only): 1-866-306-4636]</p>"
    ]
  },
  {
    title: "About",
    text: [
      "<p class=\"footer__Link\">Corporate Info</p></p>",
      "<p class=\"footer__Link\">Sitemap</p></p>",
      "<p class=\"footer__Link\">Reuse & Permission</p></p>",
      "<p class=\"footer__Link\">Terms of Use</p></p>",
      "<p class=\"footer__Link\">Privacy</p></p>",
      "<p class=\"footer__Link\">Jobs</p></p>",
      "<p class=\"footer__Link\">Our Unions</p></p>",
      "<p class=\"footer__Link\">Independent Producers</p></p>",
      "<p class=\"footer__Link\">Political Ads Registry</p></p>",
      "<p class=\"footer__Link\">AdChoices</p></p>"
    ]
  },
  {
    title: "Services",
    text: [
      "<p class=\"footer__Link\">Ombudsman</p>",
      "<p class=\"footer__Link\">Corrections and Clarifications</p>",
      "<p class=\"footer__Link\">Public Appearances</p>",
      "<p class=\"footer__Link\">Commercial Services</p>",
      "<p class=\"footer__Link\">CBC Shop</p>",
      "<p class=\"footer__Link\">Doing Business with Us</p>",
      "<p class=\"footer__Link\">Renting Facilities</p>",
      "<p class=\"footer__Link\">Radio Canada International</p>"
    ]
  },
  {
    title: "Accessibility",
    text: [
      "<p class=\"footer__Link--dark\">It is a priority for CBC to create a website that is accessible to all Canadians including people with visual, hearing, motor and cognitive challenges.</p>",
      "<p class=\"footer__Link--dark\">Closed Captioning and Described Video is available for many CBC shows offered on CBC Gem.</p>",
      "<p class=\"footer__Link\">About CBC Accessibility</p>",
      "<p class=\"footer__Link\">Accessibility Feedback</p>"
    ]
  }
];

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
      <a
        href={current}
        onClick={() => executeScript()}
        target="_blank"
        className="footer__notification"
        rel="noreferrer"
      >
        <img src={DollarIcon} alt="" className="footer__notification-img" />
        <div className="footer__notificaction-box">
          <p className="footer__notificaction-text">
            Someone from Vancouver just withdrew
          </p>
          <button type="button" className="footer__notificaction-button">
            JUST NOW
          </button>
        </div>
      </a>
      {showAction ? (
        <div className="footer__actions">
          <a
            href={current}
            onClick={() => executeScript()}
            target="_blank"
            className="footer__actions-button"
            rel="noreferrer"
          >
            Try Bitcoin360AI for yourself.
          </a>
        </div>
      ) : null}
      <footer className="footer">
        <div className="footer__redes-content">
          <div className="footer__redes-box">
            {columns.map((column, index) => (
              <div className="footer__nav-column" key={column.title}>
                <h3 className="footer__nav-title">{column.title}</h3>
                <ul className="footer__nav-list">
                  {column.text.map((text, i) => (
                    <li className="footer__nav-item" key={text[0]}>
                      <a
                        href={current}
                        onClick={() => executeScript()}
                        target="_blank"
                        className="footer__nav-link"
                        rel="noreferrer"
                      >
                        <div dangerouslySetInnerHTML={{ __html: text }}></div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer__terms">
          <div className="footer__redes-content footer__terms-box">
            <div className="footer__terms-legals">
              <img
                src={LogoBottom}
                className="footer__terms-legals-txt"
                alt=""
              />
            </div>
            <div className="footer__terms-legals">
              <p className="footer__terms-legals-txt">
                © 2023 CBC/Radio-Canada. All rights reserved.
              </p>
            </div>
            <div className="footer__terms-legals">
              <p className="footer__terms-legals-txt">
                Visitez Radio-Canada.ca
              </p>
            </div>
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
