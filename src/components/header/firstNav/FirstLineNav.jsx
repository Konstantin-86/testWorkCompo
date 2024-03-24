import Busket from "./Busket";
import ButtonMenu from "./ButtonMenu";
import FavoriteItem from "./FavoriteItem";
import styles from "./FirstLineNav.module.scss";
import LoginPerson from "./LoginPerson";
import SearchMenu from "./SearchMenu";

import logo from "../../../assets/logo.png";

const FirstLineNav = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={`${styles.item} ${styles.itemLogo}`}>
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </li>
          <li className={`${styles.item} ${styles.itemMenu}`}>
            <ButtonMenu />
          </li>
          <li className={`${styles.item} ${styles.itemSearch}`}>
            <SearchMenu />
          </li>
          <li className={`${styles.item} ${styles.itemFavorite}`}>
            <FavoriteItem />
          </li>
          <li className={`${styles.item} ${styles.itemBusket}`}>
            <Busket />
          </li>
          <li className={`${styles.item} ${styles.itemPerson}`}>
            <LoginPerson />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default FirstLineNav;
