import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default () => (
  <div style={{ margin: "3rem auto", maxWidth: 600 }}>
    <Header text="Welcome to my page!" />
    <h2>Where do you want to go?</h2>
    <blockquote>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nihil sint
        totam facere ea nemo facilis dolore deserunt. Autem voluptates voluptate
        laborum dicta distinctio aliquam inventore! Autem ipsa cumque eius iure
        accusantium adipisci nihil deserunt ut, laboriosam consectetur dolorem?
        Provident et debitis id eveniet. Rem mollitia neque, sint vitae
        voluptate, vero laboriosam dolor possimus iusto adipisci nesciunt
        assumenda nisi, autem excepturi et ut voluptas quo qui distinctio.
        Accusantium adipisci sunt consequuntur, enim eos vitae tenetur
        necessitatibus amet suscipit, nobis praesentium, cumque voluptatum
        doloremque nulla modi voluptatem quo doloribus? Reiciendis earum alias
        amet consequatur aliquid quidem, quis reprehenderit quas ex tenetur!{" "}
        <em>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid et,
          minima fugiat omnis ipsam sed non ipsa nesciunt optio nam.
        </em>
      </p>
    </blockquote>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact Us</Link>
  </div>
);
