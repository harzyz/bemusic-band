import styles from "./theClassic.module.css";
import image1 from "../../assets/images/image 1.png";
import image2 from "../../assets/images/image 3.png";
import image3 from "../../assets/images/image 2.png";
import image4 from "../../assets/images/image 4.png";
import image5 from "../../assets/images/image 6.png";
import image6 from "../../assets/images/image 5.png";

const TheClassic = () => {
  return (
    <section id='gallery' className={styles.wrapper}>
      <div className={styles.topPart}>
        <h2>
          The band <br /> in classic uniforms
        </h2>
        <div className={styles.instruments}>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.bottomPart}>
        <div className={styles.pictures}>
          <div className={styles.picture}>
            <img src={image4} alt="" />
          </div>
          <div className={styles.picture}>
            <img src={image5} alt="" />
          </div>
          <div className={styles.picture}>
            <img src={image6} alt="" />
          </div>
        </div>
        <div className={styles.typo}>
          <div className={styles.crazyTypo}>
            <div className={styles.crazy}>
              <div>
                <img src={image3} alt="" />
              </div>
              <h1>172</h1>
            </div>
            <p>
              Vivamus in diam turpis. In condimentum <br /> maximus tristique. Maecenas
              non laoreet <br /> odio.
            </p>
            <button className={styles.learnBtn}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheClassic;
