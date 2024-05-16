import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { useState } from "react";
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={style.header}>
      <Link to="/">
        <span>Festfy!</span>
      </Link>
      <nav
        onClick={toggleMenu}
        className={`${style.links} ${showMenu ? style.show : ""}`}
      >
        <Link to="/">Home</Link>
        <Link to="/sobre">Login</Link>
        <Link to="/projetos">Festas</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
      <div onClick={toggleMenu} className={style.menuButton}>
        <span className={style.menuItem}></span>
        <span className={style.menuItem}></span>
        <span className={style.menuItem}></span>
      </div>
    </header>
  );
}

export default Header;
