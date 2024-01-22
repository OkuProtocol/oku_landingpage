"use client";
import styles from "./styles/hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_texts}>
        <div className={styles.hero_bg__image} />
        <div className={styles.hero_text}>
          <div className={styles.hero_lable}>
            <div />
            <h5>Web3 powered payment</h5>
            <div />
          </div>
          <h1>Renew solar-power utility using Fiat and Crypto Currency.</h1>
          <p>
            Oku is a Payment Infastructure that engages with the{" "}
            <span>M3tering Protocol</span>, allowing users to make payments and
            renew their solar-power utility using Fiat and Crypto Currency.
          </p>
        </div>
      </div>
      <div className={styles.hero_image}>
        <img src="./handbulb.png" />
      </div>
    </div>
  );
};

export default Hero;
