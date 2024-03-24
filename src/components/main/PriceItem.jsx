import { useState } from "react";

import styles from "./styles/PriceItem.module.scss";
const PriceItem = () => {
  const [switchHandler, setSwitchHandler] = useState(true);
  const [addToCartHandler, setAddToCartHandler] = useState(true);
  const [count, setCount] = useState(1);

  const addToCartFunc = () => {
    setAddToCartHandler(false);
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 1) return setCount(1);
    setCount(count - 1);
  };
  return (
    <div className={styles.inner}>
      <p className={styles.redCost}>166 534.00 цена без скидки</p>
      <p className={styles.mainCost}>
        122 566 ₽<span className={styles.discount}>-15%</span>
      </p>
      <div className={styles.innerSwitch}>
        <p className={styles.sumSwitch}>12 штук в уп.</p>
        <div
          className={switchHandler ? styles.switchOn : styles.switchOff}
          onClick={() => setSwitchHandler(!switchHandler)}
        ></div>
        <p className={styles.labelSwitch}>Заказ упаковкой</p>
      </div>
      <div className={styles.deliveryInner}>
        <div className={styles.deliveryItem}>
          Завтра
          <p>Доставка</p>
        </div>
        <div className={styles.deliveryItem}>
          7 шт.
          <p>Тарасовка</p>
        </div>
        <div className={styles.deliveryItem}>
          7 шт.
          <p>Тарасовка</p>
        </div>
      </div>
      <div className={styles.buttonInner}>
        <button className={styles.addToCart} onClick={addToCartFunc}>
          {addToCartHandler ? (
            <p className={styles.buttonCart}>
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
                  fill="#FFFFFF"
                />
              </svg>
              <span>В корзину</span>
            </p>
          ) : (
            <p className={styles.activeCart}>
              <span className={styles.minus} onClick={decrement}>
                <svg
                  width="16"
                  height="2"
                  viewBox="0 0 16 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 2H1C0.448 2 0 1.553 0 1C0 0.447 0.448 0 1 0H15C15.553 0 16 0.447 16 1C16 1.553 15.553 2 15 2Z"
                    fill="#071435"
                  />
                </svg>
              </span>
              <span>{count} штуки</span>
              <span className={styles.plus} onClick={increment}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 7H9V1C9 0.447 8.552 0 8 0C7.448 0 7 0.447 7 1V7H1C0.448 7 0 7.447 0 8C0 8.553 0.448 9 1 9H7V15C7 15.553 7.448 16 8 16C8.552 16 9 15.553 9 15V9H15C15.552 9 16 8.553 16 8C16 7.447 15.552 7 15 7Z"
                    fill="#071435"
                  />
                </svg>
              </span>
            </p>
          )}
        </button>
        <button className={styles.favorite}>
          <svg
            width="28"
            height="23"
            viewBox="0 0 28 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.62624 3.00004C6.47424 3.00004 5.39424 3.44537 4.58624 4.25471C2.90891 5.93471 2.90891 8.66937 4.58757 10.352L13.9996 19.78L23.4129 10.352C25.0916 8.66937 25.0916 5.93471 23.4129 4.25471C21.7969 2.63471 18.9489 2.63737 17.3329 4.25471L14.9436 6.64804C14.4422 7.15071 13.5569 7.15071 13.0556 6.64804L10.6662 4.25337C9.85824 3.44537 8.77957 3.00004 7.62624 3.00004ZM13.9996 23C13.6462 23 13.3062 22.86 13.0569 22.608L2.69957 12.2347C-0.0150925 9.51471 -0.0150925 5.08937 2.69957 2.36937C4.01157 1.05737 5.76091 0.333374 7.62624 0.333374C9.49157 0.333374 11.2422 1.05737 12.5529 2.36937L13.9996 3.81871L15.4462 2.37071C16.7582 1.05737 18.5076 0.333374 20.3742 0.333374C22.2382 0.333374 23.9889 1.05737 25.2996 2.36937C28.0156 5.08937 28.0156 9.51471 25.3009 12.2347L14.9436 22.6094C14.6929 22.86 14.3542 23 13.9996 23Z"
              fill="#1551E5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PriceItem;
