import styles from "./Card.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
// import { FaJava } from "react-icons/fa6";
// import { SiSpring } from "react-icons/si";
// import { PiFileSql } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
// import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url, homepage }) {
  return (
    <section className={styles.card}>
      <h2>{name}</h2>

      <p>{description}</p>
      <a href={homepage} target="_blank noopener noreferred">
        {homepage}
      </a>
      <div className={styles.card_footer}>
        <div className={styles.icons}>
          <FaHtml5 className={styles.icon} />
          <FaCss3Alt className={styles.icon} />
          <IoLogoJavascript className={styles.icon} />
          <FaReact className={styles.icon} />
          {/* <FaJava className={styles.icon} /> */}
          {/* <SiSpring className={styles.icon} /> */}
          {/* <PiFileSql className={styles.icon} /> */}
        </div>
        <a
          href={html_url}
          target="_blank"
          rel="nopenner noreferrer"
          className={styles.card_botao}
        >
          <BsArrowRight />
        </a>
      </div>
    </section>
  );
}
export default Card;
