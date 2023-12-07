import React from "react";
import Container from "../container";
import * as styles from "./styles.module.scss";

const IntroBlock = () => {
  return (
    <div className={styles.introBlock}>
      <Container size="small">
        <h1 className={styles.introBlockTitle}>
          <span>Digital marketing</span> services for your{" "}
          <span>online business</span>
        </h1>
        <a className={styles.cta} href="/">
          Get in touch
        </a>
      </Container>
    </div>
  );
};

export default IntroBlock;
