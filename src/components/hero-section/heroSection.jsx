import styles from "./heroSection.module.css";
import logo from "../../assets/images/Group 2.png";
import disc from '../../assets/images/finger-cricle.png'
import img1 from '../../assets/images/musicband-home-classic-instruments 1.png'
import img2 from '../../assets/images/Rectangle 9.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [menu, setMenu] = useState(false);

  const toggleBodyOverflow = open => {
    const body = document.body;
      if (body) {
        body.style.overflow = open ? 'hidden' : 'unset';
      }
    };

  useEffect(() => {
    toggleBodyOverflow(menu);
  }, [menu]);


  const toggleMenuOpen = () => {
    setMenu(true)
  }

  const toggleMenuClose = () => {
    setMenu(false)
  }

  return (
    <section id='home' className={styles.wrapper}>
      <div className={styles.one}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <div className={styles.logoImage}>
              <img src={logo} alt="" />
            </div>
            <div>
              <h3>BeMusic</h3>
              <h3>Band</h3>
            </div>
          </div>
          <div onClick={toggleMenuClose} className={menu ? styles.navListWapper : styles.closeListWapper}>
            <ul onClick={e => e.stopPropagation()} className={menu ? styles.navList : styles.close}>
              <a onClick={toggleMenuClose} href="#home"><li>Home</li></a>
              <a onClick={toggleMenuClose} href="#music"><li>The brand</li></a>
              <a onClick={toggleMenuClose} href="#home"><li>Music</li></a>
              <a onClick={toggleMenuClose} href="#gallery"><li>Gallery</li></a>
              <a onClick={toggleMenuClose} href="#contact"><li>Contact</li></a>
              <li onClick={toggleMenuClose}>
                <button className={styles.buyNowBtn}>Buy Now</button>
              </li>
              <FaRegWindowClose onClick={toggleMenuClose} className={styles.closeIcon} />
            </ul>
          </div>
          <GiHamburgerMenu onClick={toggleMenuOpen} className={styles.harburger} />
        </nav>
        <div className={styles.heroText}>
          <h1>
            Drunken Monkey <br /> Our new album in 2018
          </h1>
        </div>
        <div className={styles.combine}>
          <div className={styles.line}></div>
          <div className={styles.showOff}>
            <h3>Drunken <br /> monkey</h3>
            <div>
              <img src={disc} alt="disc" />
            </div>
            <h3>Listen <br /> to new album</h3>
          </div>
        </div>
        <div className={styles.bandImage}>
          <img src={img1} alt="" />
        </div>
        <div className={styles.bandImage2}>
          <img src={img2} alt="" />
        </div>
      </div>
      <div className={styles.one2}>
      </div>
    </section>
  );
};

export default HeroSection;
