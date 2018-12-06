import React from "react";
import Container from "../components/container";
import styles from "./about-css-modules.module.css";

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} alt="" className={styles.avatar} />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default () => (
  <Container>
    <h1>CSS Modules Practice</h1>
    <p>This is how they work!</p>
    <User
      username="Jane Doe"
      avatar="https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatum itaque atque sapiente ducimus rem! Distinctio dolorem quod temporibus similique."
    />
    <User
      username="John Doe"
      avatar="https://images.unsplash.com/photo-1534795129443-82e04d8bdf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      excerpt="I'm John Doe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatum itaque atque sapiente ducimus rem! Distinctio dolorem quod temporibus similique."
    />
  </Container>
);
