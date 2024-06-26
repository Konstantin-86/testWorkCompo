import styles from "./styles/SecondLineNav.module.scss";

const SecondLineNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <a href="#" className={styles.item__link}>
              Мои заказы
            </a>
          </li>
          <li className={styles.list__item}>
            <a href="#" className={styles.item__link}>
              Сотрудники
            </a>
          </li>
          <li className={styles.list__item}>
            <a href="#" className={styles.item__link}>
              Шаблоны заказов
            </a>
          </li>
          <li className={styles.list__item}>
            <a href="#" className={styles.item__link}>
              Обращения
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.item}>
        <ul className={styles.list2}>
          <li>
            <a
              href="#"
              className={`${styles.item2__linkMessage} ${styles.item2__link}`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.66672 7.33287C3.66672 6.96487 3.96539 6.6662 4.33339 6.6662C4.70139 6.6662 5.00005 6.96487 5.00005 7.33287C5.00005 7.70087 4.70139 7.99953 4.33339 7.99953C3.96539 7.99953 3.66672 7.70087 3.66672 7.33287ZM7.00005 6.6662C6.63205 6.6662 6.33339 6.96487 6.33339 7.33287C6.33339 7.70087 6.63205 7.99953 7.00005 7.99953C7.36805 7.99953 7.66672 7.70087 7.66672 7.33287C7.66672 6.96487 7.36805 6.6662 7.00005 6.6662ZM9.66672 6.6662C9.29872 6.6662 9.00005 6.96487 9.00005 7.33287C9.00005 7.70087 9.29872 7.99953 9.66672 7.99953C10.0347 7.99953 10.3334 7.70087 10.3334 7.33287C10.3334 6.96487 10.0347 6.6662 9.66672 6.6662ZM12.2657 8.19613C11.9277 10.3655 10.179 12.1648 8.01299 12.5708C6.96699 12.7681 5.90165 12.6555 4.93499 12.2461C4.66099 12.1301 4.37765 12.0715 4.09965 12.0715C3.97299 12.0715 3.84765 12.0835 3.72432 12.1081L1.84965 12.4828L2.22499 10.6048C2.30365 10.2148 2.25565 9.79747 2.08699 9.39813C1.67765 8.43147 1.56565 7.3668 1.76232 6.32013C2.16832 4.15413 3.96699 2.40547 6.13699 2.06747C7.86365 1.7988 9.55232 2.3428 10.771 3.56147C11.9903 4.7808 12.535 6.47013 12.2657 8.19613ZM11.7143 2.6188C10.191 1.09613 8.08432 0.416801 5.93165 0.749468C3.21365 1.17347 0.960319 3.3628 0.451652 6.07413C0.206319 7.37947 0.347652 8.7088 0.858985 9.91747C0.923652 10.0715 0.943652 10.2148 0.918319 10.3435L0.346319 13.2021C0.302319 13.4208 0.370985 13.6468 0.528985 13.8041C0.654985 13.9308 0.824985 13.9995 1.00032 13.9995C1.04365 13.9995 1.08699 13.9955 1.13099 13.9868L3.98632 13.4155C4.15032 13.3841 4.30899 13.4301 4.41499 13.4741C5.62499 13.9855 6.95432 14.1261 8.25832 13.8815C10.9703 13.3728 13.1597 11.1195 13.5837 8.40147C13.9183 6.25013 13.2377 4.14213 11.7143 2.6188Z"
                  fill="#1551E5"
                />
              </svg>
              Ваш менеджер
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${styles.item2__linkPercent} ${styles.item2__link}`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1598 0.840443C10.9285 0.608443 10.5532 0.608443 10.3218 0.840443L0.840504 10.3218C0.724504 10.4378 0.666504 10.5891 0.666504 10.7411C0.666504 10.8924 0.724504 11.0444 0.840504 11.1598C1.07184 11.3911 1.4465 11.3911 1.6785 11.1598L11.1598 1.67844C11.3912 1.44644 11.3912 1.07178 11.1598 0.840443ZM8.6667 10.6666C8.11537 10.6666 7.6667 10.218 7.6667 9.66664C7.6667 9.11531 8.11537 8.66664 8.6667 8.66664C9.21804 8.66664 9.6667 9.11531 9.6667 9.66664C9.6667 10.218 9.21804 10.6666 8.6667 10.6666ZM8.6667 7.33331C7.38004 7.33331 6.33337 8.37998 6.33337 9.66664C6.33337 10.9533 7.38004 12 8.6667 12C9.95337 12 11 10.9533 11 9.66664C11 8.37998 9.95337 7.33331 8.6667 7.33331ZM3.33337 1.99998C3.8847 1.99998 4.33337 2.44864 4.33337 2.99998C4.33337 3.55131 3.8847 3.99998 3.33337 3.99998C2.78204 3.99998 2.33337 3.55131 2.33337 2.99998C2.33337 2.44864 2.78204 1.99998 3.33337 1.99998ZM3.33337 5.33331C4.62004 5.33331 5.6667 4.28664 5.6667 2.99998C5.6667 1.71331 4.62004 0.666643 3.33337 0.666643C2.0467 0.666643 1.00004 1.71331 1.00004 2.99998C1.00004 4.28664 2.0467 5.33331 3.33337 5.33331Z"
                  fill="#1551E5"
                />
              </svg>
              Акции
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${styles.item2__linkBlog} ${styles.item2__link}`}
            >
              Блог
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SecondLineNav;
