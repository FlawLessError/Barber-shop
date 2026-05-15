import styles from "./Banner.module.scss";
import barberImage from "../../public/images/barber.webp";

import Button from "./UI/Button";

const Banner = () => {
  return (
    <header className={styles.banner}>
      <div className="container even-columns">
        <div className={styles.banner__content}>
          <h1 className={styles.banner__pageTitle}>The Barber Shop</h1>
          <p className={styles.banner__desc}>
            Established over a decade ago, <strong>The Barber Shop</strong> is
            here to serve you're hair needs, whatever they are. From a simple
            cut, a beard trim or a hot towel shave, we're here to help you with.
          </p>
          <div>
            <Button type="link" dataType="accent" href="#Book">
              Book appointment
            </Button>
            <Button type="link" dataType="primary" href="#Prices">
              View prices
            </Button>
          </div>
        </div>
        <img
          className={styles.banner__img}
          src={barberImage}
          alt="A barber wokring on a haircut."
        />
      </div>
    </header>
  );
};

export default Banner;
