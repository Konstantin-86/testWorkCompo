import styles from "./styles/Content.module.scss";
import PriceItem from "./PriceItem";
import CharacteristicItem from "./CharacteristicItem";
import DescriptionItem from "./DescriptionItem";

const Content = () => {
  return (
    <>
      <div className={styles.wrap}>
        <PriceItem />
        <CharacteristicItem />
      </div>
      <div className={styles.descriptionItem}>
        <DescriptionItem />
      </div>
    </>
  );
};

export default Content;
