import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <>
      <h2 className={styles.titulo2}>Algo de errado não está certo!</h2>
      <div className={styles.textos}>
        <span>404</span>
        <br />
        <strong>Pagina não localizada!</strong>
      </div>
    </>
  );
}

export default PageNotFound;
