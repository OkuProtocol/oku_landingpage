"use client";
import React, { useState, useRef } from "react";
import styles from "./styles/features.module.scss";

const Features = () => {
  return (
    <div className={styles.features_container}>
      <div className={styles.features_header}>
        <h3>Make payments easily without Hassel</h3>
      </div>
      <div className={styles.features_cards}>
        <div className={styles.features_card}>
          <img src="./stars.svg" className={styles.card_starone} />
          <div className={styles.card_texts}>
            <h3>Payment of Solar-Power with Fiat Currency</h3>
            <p>
              Empower your sustainable journey with our cutting-edge feature
              that allows users to seamlessly renew their solar-power utility using
              traditional Fiat currency. By integrating these payment options,
              we provide flexibility and accessibility to a broader spectrum of
              users, ensuring a more inclusive and sustainable future.
            </p>
          </div>
          <img src="./nairacoins.svg" className={styles.card_coins} />
        </div>
        <div className={styles.features_card}>
          <img src="./stars.svg" className={styles.card_startwo} />
          <div className={styles.card_texts}>
            <h3>Payment of Solar-Power with Crypto Currency</h3>
            <p>
              Empower your sustainable journey with our cutting-edge feature
              that allows users to seamlessly renew their solar-power utility
              using revolutionary world of Crypto Currency. By integrating these
              payment options, we provide flexibility and accessibility to a
              broader spectrum of users, ensuring a more inclusive and
              sustainable future.
            </p>
          </div>
          <img src="./dollarcoins.svg" className={styles.card_coins} />
        </div>
      </div>
    </div>
  );
};

export default Features;
