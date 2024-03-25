import Content from "./Content";
import Slider from "./Slider";
import styles from "./styles/Main.module.scss";
const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.breadcrumbs}>
        <ul className={styles.list}>
          <li className={styles.item}>Каталог</li>
          <li className={styles.item}>/ Обувь</li>
          <li className={styles.item}>/ Кроссовки</li>
          <li className={styles.item}>/ Беговые</li>
        </ul>
      </div>
      <h1 className={styles.title}>Кроссовки мужские Skechers Sunny Dale</h1>
      <div className={styles.inner}>
        <div className={styles.mainItem}>
          <Slider />
        </div>
        <div className={`${styles.mainItem} ${styles.content}`}>
          <Content />
        </div>
      </div>
    </main>
  );
};

export default Main;
