import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import icons from "../../icons";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={`${styles.header}`}>
        <Link className={styles.headerLogo}>
          <img src={icons.logo} alt="Logo" />
        </Link>
        <nav className={styles.navLinks}>
          <NavLink>About us</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Work</NavLink>
          <NavLink>News</NavLink>
          <NavLink>Contacts</NavLink>
        </nav>
        <address>
          <div className={`${styles.contactsHeader} ${styles.callUsBg}`}>
            Call us <a href="tel:+74955550128">(405) 555-0128</a>
          </div>
          <div className={`${styles.contactsHeader} ${styles.talkToUsBg}`}>
            Talk to us <a href="mailto:hello@createx.com">hello@createx.com</a>
          </div>
        </address>
      </header>
    </div>
  );
};

export default Header;
