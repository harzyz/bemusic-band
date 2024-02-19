import styles from "./theBrand.module.css";
import guitar from "../../assets/images/musicband-instruments 1.png";

const TheBrand = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.aboutText}>
        <h2>We can feel and <br /> play any song</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitat pa qui officia.
        </p>
        <button className={styles.aboutUsBtn}>About Us</button>
      </div>
      <div className={styles.aboutImage}>
        <img src={guitar} alt="" />
      </div>
    </section>
  );
};

export default TheBrand;
