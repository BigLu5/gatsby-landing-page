import * as React from "react";
import Container from "../container";
import * as styles from "./styles.module.scss";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ""}`}>
      <Container>
        <div className={styles.navbarInner}>
          <div className={styles.navbarLeft}>
            <a className={styles.logo} href="#">
              Zap Marketing
            </a>
            <ul
              className={`${styles.list} ${isMenuOpen ? styles.menuOpen : ""}`}
            >
              <li className={styles.listItem}>
                <a href="#">About</a>
              </li>
              <li className={styles.listItem}>
                <a href="#">Solutions</a>
              </li>
              <li className={styles.listItem}>
                <a href="#">Work</a>
              </li>
            </ul>
          </div>
          <div className={styles.navbarRight}>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </div>
          <a className={styles.cta} href="#">
            Contact
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
