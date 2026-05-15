import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  desc: string;
};

const Card = ({ title, desc }: CardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__desc}>{desc}</p>
    </div>
  );
};

export default Card;
