import * as React from "react";
import Container from "../container";
import * as styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.navbarInner}>
          <a className={styles.logo} href="#">
            Zap Marketing
          </a>
          <ul className={styles.list}>
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
          <a className={styles.cta} href="#">
            Contact
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
