import styles from "./PrimaryNav.module.scss";
import ToggleTheme from "./ToggleTheme";
import Logo from "./UI/Logo";

const PrimaryNav = () => {
  return (
    <nav className={styles.primaryNav}>
      <div className="container">
        <Logo></Logo>
        <ul className={styles.primaryNav__listItems}>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Hours">Hours</a>
          </li>
          <li>
            <a href="#Prices">Prices</a>
          </li>
        </ul>
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default PrimaryNav;
