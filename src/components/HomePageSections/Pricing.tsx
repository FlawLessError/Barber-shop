import styles from "./Pricing.module.scss";

const Pricing = () => {
  return (
    <section id="Prices" className={styles.pricing}>
      <div className="container" data-type="narrow">
        <header>
          <h2 className={styles.pricing__title}>Pricing</h2>
        </header>
        <div className={styles.pricing__container}>
          <div>
            <h3>Adult Cut</h3>
            <p>$25</p>
          </div>
          <div>
            <h3>Beard Trim</h3>
            <p>$25</p>
          </div>
          <div>
            <h3>Kid Cut</h3>
            <p>$21</p>
          </div>
          <div>
            <h3>How Towel Shave</h3>
            <p>$15</p>
          </div>
          <div>
            <h3>Cut & Wash</h3>
            <p>$35</p>
          </div>
          <div>
            <h3>Head & Beard</h3>
            <p>$45</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
