import styles from "./Footer.module.css";
import Button from "../Button/Button";
import icons from "../../icons";
import { ReactSVG } from "react-svg";
const Footer = () => {
  const footerValues = {
    socialLogo: [
      icons.whatsapp,
      icons.messanger,
      icons.facebook,
      icons.twitter,
      icons.youtube,
    ],
  };
  return (
    <footer className={styles.footerBg}>
      <div className={`${styles.container} ${styles.flex}`}>
        <div className={styles.flex}>
          <div className={styles.footerLogos}>
            <div className={`${styles.logos}`}>
              <img src={icons.lightCompanyLogo} alt="Logo" />
              <div className={styles.companyLogos}>
                {footerValues.socialLogo.map((logo, index) => (
                  <ReactSVG key={index} src={logo} />
                ))}
              </div>
            </div>
            <p>
              Createx Construction Bureau has been successfully operating
              in&nbsp;the USA construction market since 2000. We&nbsp;are proud
              to&nbsp;offer you quality construction and exemplary service. Our
              mission is&nbsp;to&nbsp;set the highest standards for construction
              sphere.
            </p>
          </div>
          <div>
            <h3 className={styles.subscribeTitle}>Let's stay in touch</h3>
            <div>
              <form className={styles.flex} action="">
                <p className={styles.subscribeInput}>
                  <input
                    className={styles.emailSubscribe}
                    type="email"
                    name="email1"
                    id="email1"
                    placeholder="Your email address "
                  />
                </p>
                <Button
                  style={{
                    padding: "0",
                    borderRadius: "0px 4px 4px 0px",
                    maxHeight: "44px",
                    maxwidth: "131px",
                    height: "44px",
                    width: "131px",
                  }}
                >
                  Subscribe
                </Button>
              </form>
            </div>
            <p className={styles.descr}>
              *Subscribe to our newsletter to receive communications and early
              updates from Createx Construction Bureau.
            </p>
          </div>
        </div>
        <div className={styles.contactsPart}>
          <div className={styles.description}>
            <h3>head office</h3>
            <ul>
              <li style={{ marginBottom: "4px" }} className={styles.flex}>
                <span
                  style={{ color: "#fff", marginRight: "4px" }}
                  className={styles.headOfficeDescr}
                >
                  Address:
                </span>
                <p
                  style={{ color: "#787A80" }}
                  className={styles.headOfficeDescr}
                >
                  8502 Preston Rd. Inglewood, New York
                </p>
              </li>
              <li style={{ marginBottom: "4px" }}>
                <div>
                  <span style={{ color: "#fff", marginRight: "4px" }}>
                    Call:
                  </span>
                  <a className={styles.headOfficeDescr} href="tel:+74955550128">
                    (405) 555-0128
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <span style={{ color: "#fff", marginRight: "4px" }}>
                    Email:
                  </span>
                  <a
                    className={styles.headOfficeDescr}
                    href="mailto:hello@createx.com"
                  >
                    hello@createx.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.description}>
            <h3>who we are</h3>
            <ul>
              <li style={{ marginBottom: "4px" }}>
                <span className={styles.headOfficeDescr}>About us</span>
              </li>
              <li style={{ marginBottom: "4px" }}>
                <span className={styles.headOfficeDescr}>
                  Available Positions
                </span>
              </li>
              <li>
                <span className={styles.headOfficeDescr}>Contacts</span>
              </li>
            </ul>
          </div>
          <div className={styles.description}>
            <h3>qur experience</h3>
            <ul>
              <li style={{ marginBottom: "4px" }}>
                <span className={styles.headOfficeDescr}>Services</span>
              </li>
              <li style={{ marginBottom: "4px" }}>
                <span className={styles.headOfficeDescr}>Work</span>
              </li>
              <li>
                <span className={styles.headOfficeDescr}>News</span>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <p className={styles.allRights}>
          © All rights reserved. Made with love by Createx Studio{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
