import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import img from './flyer.jfif'
function Home() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
<br></br>
<br></br>
<br></br>
        <p>Z'FEST

        <br></br>

          <span>SUA ENTRADA 
          </span>
            <br></br>
            AQUI
        </p>

      
          <img
             id={`${styles.mobile}`}
            src={img}
            alt="imagem de home"
          />
         
        
        <br></br>

        <div className={`${styles.divbtn}`}>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
           Compre aqui
          </Link>
          </div>
          <br></br> <br></br>
        </div>
        <figure>
          <img
            className={styles.img}
            src={img}
            alt="imagem de home"
          />
        </figure>
      </section>
    </>
  );
}
export default Home;
