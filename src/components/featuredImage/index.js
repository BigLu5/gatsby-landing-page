import * as React from "react";
import Container from "../container";
import * as styles from "./styles.module.scss";

const FeaturedImage = () => {
  return (
    <div className={styles.featuredImage}>
      <Container size="medium">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="test image"
        />
      </Container>
    </div>
  );
};

export default FeaturedImage;
