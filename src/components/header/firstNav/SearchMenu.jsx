import { useState } from "react";
import styles from "./styles/SearchMenu.module.scss";

const SearchMenu = () => {
  const [inptValue, setInptValue] = useState("");
  const [wrongValue, setWrongValue] = useState(false);
  const wrongInpt = () => {
    setWrongValue(true);
    setTimeout(() => {
      setWrongValue(false);
    }, 1500);
  };
  return (
    <div className={styles.inner}>
      <input
        className={
          wrongValue ? `${styles.input} ${styles.wrong}` : styles.input
        }
        type="text"
        placeholder="Название запроса"
        value={inptValue}
        onChange={(e) => setInptValue(e.target.value)}
      />
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.inputIconClose}
        onClick={() => setInptValue("")}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.41413 6.00001L11.7071 1.70701C12.0981 1.31601 12.0981 0.684006 11.7071 0.293006C11.3161 -0.0979941 10.6841 -0.0979941 10.2931 0.293006L6.00013 4.58601L1.70713 0.293006C1.31613 -0.0979941 0.684128 -0.0979941 0.293128 0.293006C-0.0978721 0.684006 -0.0978721 1.31601 0.293128 1.70701L4.58613 6.00001L0.293128 10.293C-0.0978721 10.684 -0.0978721 11.316 0.293128 11.707C0.488128 11.902 0.744128 12 1.00013 12C1.25613 12 1.51213 11.902 1.70713 11.707L6.00013 7.41401L10.2931 11.707C10.4881 11.902 10.7441 12 11.0001 12C11.2561 12 11.5121 11.902 11.7071 11.707C12.0981 11.316 12.0981 10.684 11.7071 10.293L7.41413 6.00001Z"
          fill="#071435"
        />
      </svg>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={wrongInpt}
        className={styles.inputIconSearch}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z"
          fill="#071435"
        />
      </svg>
    </div>
  );
};

export default SearchMenu;
