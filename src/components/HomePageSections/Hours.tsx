import styles from "./Hours.module.scss";

const Hours = () => {
  return (
    <section id="Hours" className={styles.hours}>
      <div className="container" data-type="full-bleed">
        <header>
          <h2 className={styles.hours__title}>Hours</h2>
          <p className={styles.hours__subTitle}>
            Open 7 days a week to serve your hair cutting needs
          </p>
        </header>
        <div className={styles.hours__container}>
          <div>
            <div>
              <p className={styles.hours__days}>Mon</p>
              <p className={styles.hours__hours}>9:00 - 18:00</p>
            </div>
          </div>
          <div>
            <div>
              <p className={styles.hours__days}>Tue</p>
              <p className={styles.hours__hours}>9:00 - 18:00</p>
            </div>
          </div>
          <div>
            <div>
              <p className={styles.hours__days}>Wed</p>
              <p className={styles.hours__hours}>9:00 - 18:00</p>
            </div>
          </div>
          <div>
            <div>
              <p className={styles.hours__days}>Thu</p>
              <p className={styles.hours__hours}>9:00 - 18:00</p>
            </div>
          </div>
          <div>
            <div>
              <p className={styles.hours__days}>Fri</p>
              <p className={styles.hours__hours}>9:00 - 21:00</p>
            </div>
          </div>
          <div>
            <div>
              <p className={styles.hours__days}>Sat</p>
              <p className={styles.hours__hours}>10:00 - 21:00</p>
            </div>
          </div>
          <div>
            <div>
              <p className={styles.hours__days}>Sun</p>
              <p className={styles.hours__hours}>10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;
