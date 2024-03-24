import styles from "./styles/Content.module.scss";
import PriceItem from "./PriceItem";
import CharacteristicItem from "./CharacteristicItem";
import DescriptionItem from "./DescriptionItem";

const Content = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.wrap}>
        <div className={styles.priceItem}>
          <PriceItem />
        </div>
        <div className={styles.characteristicItem}>
          <CharacteristicItem />
        </div>
      </div>

      <div className={styles.descriptionItem}>
        <DescriptionItem />
      </div>
    </div>
  );
};

export default Content;
