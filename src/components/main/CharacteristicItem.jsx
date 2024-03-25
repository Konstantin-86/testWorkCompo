import styles from "./styles/CharacteristicItem.module.scss";

const CharacteristicItem = () => {
  return (
    <div className={styles.inner}>
      <h3 className={styles.title}>Характеристики</h3>
      <div className={styles.innerItems}>
        <div className={styles.item}>
          <h4 className={styles.itemTitle}>ELC00696</h4>
          <p className={styles.itemText}>Код поставщика</p>
        </div>
        <div className={styles.item}>
          <h4 className={styles.itemTitle}>ELC0200000696</h4>
          <p className={styles.itemText}>Артикул</p>
        </div>
      </div>
      <div className={styles.innerItems}>
        <div className={styles.item}>
          <h4 className={styles.itemTitle}>ELC00696</h4>
          <p className={styles.itemText}>Код РАЭК</p>
        </div>
        <div className={styles.item}>
          <h4 className={styles.itemTitle}>ELC00696</h4>
          <p className={styles.itemText}>Код ЕТМ</p>
        </div>
      </div>
      <div className={styles.innerItems}>
        {" "}
        <div className={styles.item}>
          <h4 className={styles.itemTitle}>Electric used</h4>
          <p className={styles.itemText}>Бренд</p>
        </div>
        <div className={styles.item}>
          <h4 className={styles.itemTitle}>ELC00696</h4>
          <p className={styles.itemText}>Серия</p>
        </div>
      </div>
      <div className={styles.innerItems}>
        <div className={styles.item}>
          <h4 className={styles.itemTitle}>ELC0200000696</h4>
          <p className={styles.itemText}>Код производителя</p>
        </div>
      </div>
    </div>
  );
};

export default CharacteristicItem;
