import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <main className={classes.footer__content}>
        <section className={classes.footer__section}>
          <h2>Connect with Us</h2>
          <section className={classes["icons-section"]}>
            <a href="/" className={classes.facebook}>
              <FaFacebook className={classes.icon} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCPiw-Cn5tJLr3jODjIJqvKg"
              target="blank"
              className={classes.youtube}
            >
              <FaYoutube className={classes.icon} />
            </a>
            <a href="/" className={classes.instagram}>
              <FaInstagram className={classes.icon} />
            </a>
            <a href="/" className={classes.whatsapp}>
              <FaWhatsapp className={classes.icon} />
            </a>
          </section>
        </section>
        <section className={classes.footer__section}>
          <h2>Events</h2>
          <ul className={classes.list__items}>
            <a href="/">
              <li className={classes.listed__item}>Team</li>
            </a>
            <a href="/">
              <li className={classes.listed__item}>Branches</li>
            </a>
            <a href="/">
              <li className={classes.listed__item}>Healthy Food</li>
            </a>
            <a href="/">
              <li className={classes.listed__item}>Careers</li>
            </a>
          </ul>
        </section>
        <section className={classes.footer__section}>
          <section className={classes.newsletter}>
            <form>
              <strong>
                <p>Signup for our newsletter</p>
              </strong>
              <input
                type="email"
                label="Email address"
                placeholder="email address"
              />
              <button className={classes.btn}>
                <strong>Subscribe</strong>
              </button>
            </form>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Footer;
