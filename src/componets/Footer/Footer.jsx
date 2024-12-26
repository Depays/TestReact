import styles from "./Footer.module.css";

import Button from "../Button/Button";
import icons from "../../icons";
const Footer = () => {
  // ContactLogo = [{}];
  return (
    <footer className={styles.footerBg}>
      <div className={`${styles.container} ${styles.flex}`}>
        <div className={styles.flex}>
          <div>
            <div>
              <img src={icons.logo} alt="Logo" />
              <span>Icons</span>
            </div>
            <p>Createx Construction Bureau has been successfully operating</p>
          </div>
          <div>
            <h3>Let's stay in touch</h3>
            <div>
              <form action="">
                <p>
                  <input type="email" name="email1" id="email1" />
                  <Button>Subcribe</Button>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <h3>head office</h3>
            <ul>
              <li>
                <span>Address:</span>
                <p></p>
              </li>
              <li>
                <span>Call</span>
                <p></p>
              </li>
              <li>
                <span>Email</span>
                <p></p>
              </li>
            </ul>
          </div>
          <div>
            <h3>who we are</h3>
            <ul>
              <li>
                <span>About us</span>
              </li>
              <li>
                <span>Available Positions</span>
                <p></p>
              </li>
              <li>
                <span>Contacts</span>
                <p></p>
              </li>
            </ul>
          </div>
          <div>
            <h3>qur experience</h3>
            <ul>
              <li>
                <span>Services</span>
              </li>
              <li>
                <span>Work</span>
                <p></p>
              </li>
              <li>
                <span>News</span>
                <p></p>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
