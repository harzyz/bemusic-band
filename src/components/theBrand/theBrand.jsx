import styles from "./theBrand.module.css";
import guitar from "../../assets/images/musicband-instruments 1.png";
import Button from "../button/button";

const TheBrand = () => {
  return (
    <section id='brand' className={styles.wrapper}>
      <div className={styles.aboutText}>
        <h2>We can feel and <br /> play any song</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitat pa qui officia.
        </p>
        <Button label={'About Us'} />
      </div>
      <div className={styles.aboutImage}>
        <img src={guitar} alt="" />
      </div>
    </section>
  );
};

export default TheBrand;
