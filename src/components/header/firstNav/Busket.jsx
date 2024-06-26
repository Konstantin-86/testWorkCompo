import React from "react";

import styles from "./styles/Busket.module.scss";

const Busket = () => {
  return (
    <a href="#" className={styles.busket}>
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3818 11H6.76376L5.12676 5H17.3818L14.3818 11ZM19.0828 3.948C18.7158 3.354 18.0798 3 17.3818 3H4.58176L3.96476 0.737C3.84576 0.302 3.45076 0 2.99976 0H0.999756C0.446756 0 -0.000244141 0.448 -0.000244141 1C-0.000244141 1.552 0.446756 2 0.999756 2H2.23576L5.03476 12.263C5.15376 12.698 5.54876 13 5.99976 13H14.9998C15.3788 13 15.7248 12.786 15.8948 12.447L19.1708 5.894C19.4838 5.269 19.4498 4.542 19.0828 3.948ZM5.49996 15C4.67196 15 3.99996 15.671 3.99996 16.5C3.99996 17.329 4.67196 18 5.49996 18C6.32796 18 6.99996 17.329 6.99996 16.5C6.99996 15.671 6.32796 15 5.49996 15ZM14 16.5C14 15.671 14.672 15 15.5 15C16.328 15 17 15.671 17 16.5C17 17.329 16.328 18 15.5 18C14.672 18 14 17.329 14 16.5Z"
          fill="#1551E5"
        />
      </svg>
      <span>144 235₽</span>
    </a>
  );
};

export default Busket;
