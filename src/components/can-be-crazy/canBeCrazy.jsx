import styles from "./canBeCrazy.module.css";
import darkBg from "../../assets/images/darkerBg.png";
import crazyBand from "../../assets/images/musicband-band 1.png";
import crazyBand2 from "../../assets/images/musicband-band 1small.png";

const CanBeCrazy = () => {
  return (
    <section id="music" className={styles.wrapper}>
      <h1>
        We can be crazy <br /> even in classical uniforms
      </h1>
      <div className={styles.darkBg}>
        <img src={darkBg} alt="" />
      </div>
      <div className={styles.crazyBand}>
        <img src={crazyBand} alt="" />
        <img src={crazyBand2} alt="" />
      </div>
      <div className={styles.buytickets}>
        <span>
          <h1>00</h1>
          <p>days</p>
        </span>
        <span>
          <h1>00</h1>
          <p>Hours</p>
        </span>
        <p>Vivamus in diam turpis. In <br /> condimentum maximus tristique</p>
        <button className={styles.ticketsBtn}>Buy tickets now</button>
      </div>
    </section>
  );
};

export default CanBeCrazy;
