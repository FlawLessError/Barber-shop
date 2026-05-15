import styles from "./ContentInfo.module.scss";

import Logo from "./UI/Logo";

const ContentInfo = () => {
  return (
    <footer className={styles.contentInfo}>
      <div className="container flow-content">
        <Logo />
        <p>Here to serve your hair needs, whatever they might be</p>
        <a href="tel:514-555-1234" className={styles.contentInfo__phone}>
          514-555-1234
        </a>
      </div>
    </footer>
  );
};

export default ContentInfo;
