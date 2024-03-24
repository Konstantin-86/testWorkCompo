import "../../../style/media.scss";

import "./styles/ButtonMenu.scss";

const ButtonMenu = () => {
  return (
    <button className="button">
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1C0 0.448 0.448 0 1 0C1.552 0 2 0.448 2 1C2 1.552 1.552 2 1 2C0.448 2 0 1.552 0 1ZM0 6C0 5.448 0.448 5 1 5C1.552 5 2 5.448 2 6C2 6.552 1.552 7 1 7C0.448 7 0 6.552 0 6ZM1 10C0.448 10 0 10.448 0 11C0 11.552 0.448 12 1 12C1.552 12 2 11.552 2 11C2 10.448 1.552 10 1 10ZM4.9355 5H17.0645C17.5795 5 18.0005 5.421 18.0005 5.936V6.064C18.0005 6.579 17.5795 7 17.0645 7H4.9355C4.4205 7 4.0005 6.579 4.0005 6.064V5.936C4.0005 5.421 4.4205 5 4.9355 5ZM17.0645 10H4.9355C4.4205 10 4.0005 10.421 4.0005 10.936V11.064C4.0005 11.579 4.4205 12 4.9355 12H17.0645C17.5795 12 18.0005 11.579 18.0005 11.064V10.936C18.0005 10.421 17.5795 10 17.0645 10ZM4.9355 0H17.0645C17.5795 0 18.0005 0.421 18.0005 0.936V1.064C18.0005 1.579 17.5795 2 17.0645 2H4.9355C4.4205 2 4.0005 1.579 4.0005 1.064V0.936C4.0005 0.421 4.4205 0 4.9355 0Z"
          fill="#FFFFFF"
        />
      </svg>
      Меню
    </button>
  );
};

export default ButtonMenu;