import styles from "./styles/LoginPerson.module.scss";
import personImage from "../../../assets/Avatar.png";

const LoginPerson = () => {
  return (
    <div className={styles.inner}>
      <img src={personImage} alt="personImage" />
      <p>Ермаков Е.</p>
      <svg
        width="10"
        height="7"
        viewBox="0 0 10 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.00001 6.50001C4.74401 6.50001 4.48801 6.40201 4.29301 6.20701L0.293006 2.20701C-0.0979941 1.81601 -0.0979941 1.18401 0.293006 0.793006C0.684006 0.402006 1.31601 0.402006 1.70701 0.793006L5.01201 4.09801L8.30501 0.918006C8.70401 0.535006 9.33501 0.546006 9.71901 0.943006C10.103 1.34001 10.092 1.97401 9.69501 2.35701L5.69501 6.21901C5.50001 6.40701 5.25001 6.50001 5.00001 6.50001Z"
          fill="#1551E5"
        />
      </svg>
    </div>
  );
};

export default LoginPerson;
