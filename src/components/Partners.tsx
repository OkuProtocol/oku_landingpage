"use client";
import styles from "./styles/partners.module.scss"
const Partners = () => {
  return (
    <div className={styles.partners}>
      <h3>Partners</h3>

      <div className={styles.partners_image}>
        <img src="./meter.svg" />
        <img src="./iotex.svg" />
      </div>
    </div>
  );
};

export default Partners;
