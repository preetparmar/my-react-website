// Importing Files
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerStyles from "./Footer.module.css";

// Importing Icons
import {
  // faLinkedin,
  faLinkedinIn,
  // faGithubSquare,
  faGithub,
  // faInstagramSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import {
//   faEnvelopeSquare,
//   // faEnvelope,
//   faEnvelopeOpenText,
//   faEnvelopeOpen,
// } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// Main Function
const Footer = () => {
  const linkedinLogo = <FontAwesomeIcon icon={faLinkedinIn} />;
  const githubLogo = <FontAwesomeIcon icon={faGithub} />;
  const instagramLogo = <FontAwesomeIcon icon={faInstagram} />;
  const mailLogo = <FontAwesomeIcon icon={faEnvelope} />;
  return (
    <Fragment>
      <section className={footerStyles.footerContainer}>
        <div className={footerStyles.logoContainer}>
          <a
            href="https://www.linkedin.com/in/preetparmar/"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.logo}
          >
            {linkedinLogo}
          </a>
          <a
            href="https://github.com/preetparmar"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.logo}
          >
            {githubLogo}
          </a>
          <a
            href="https://www.instagram.com/prt_prmr/"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.logo}
          >
            {instagramLogo}
          </a>
          <a
            href="mailto:preetparmar@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.logo}
          >
            {mailLogo}
          </a>
        </div>
        <div className={footerStyles.contactContainer}>
          <p className={footerStyles.number}>+91-8401947314</p>
          <a
            className={footerStyles.email}
            href="mailto:preetparmar@outlook.com"
          >
            PREETPARMAR@OUTLOOK.COM
          </a>
        </div>
      </section>
    </Fragment>
  );
};

// Exporting
export default Footer;
