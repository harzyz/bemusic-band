import styles from "./footer.module.css";
import socials from '../../assets/images/Group 20.png'

const Footer = () => {
  return (
    <footer id='contact' className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.bread}>
          <div>
            <h3>Find us here</h3>
            <div>
              <img src={socials} alt="" />
            </div>
          </div>
          <div>
            <h3>Contact with us</h3>
            <p>
              Nullam viverra consectetuer quisque <br /> cursus et, porttitor
              risus.
            </p>
            <p>+61 (0) 3 8376 6284</p>
            <p>noreply@envato.com</p>
          </div>
          <div>
            <h3>Localization</h3>
            <p>Envato <br /> Level 13, 2 Elizabeth <br /> Victoria 3000 <br /> Australia</p>
          </div>
        </div>
      </div>
      <div className={styles.down}>
      © 2024 Betheme by Muffin group | All Rights Reserved | Powered by WordPress
      </div>
    </footer>
  );
};

export default Footer;
