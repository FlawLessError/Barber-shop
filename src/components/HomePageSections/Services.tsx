import styles from "./Services.module.scss";

import Card from "../UI/Card";

const Services = () => {
  return (
    <section id="Services" className={styles.services}>
      <div className="container">
        <header>
          <h2 className={styles.services__title}>Our services</h2>
        </header>
        <div className="auto-fit-columns">
          <Card
            title="Hair Cutting"
            desc="A quick clean up or a totally new style,we have you covered."
          />
          <Card
            title="Hot shaves"
            desc="There is no better way to pamper yourself than to have a hot shave."
          />
          <Card
            title="Beard cleanup"
            desc="Our barbers are expects when it comes to working on beards."
          />
          <Card
            title="Hair coloring"
            desc="Expert color work to help you keep looking your best."
          />
          <Card
            title="Kids"
            desc="Bring your kids with you while your at it, we love working them them too!"
          />
          <Card
            title="products"
            desc="We carry a wide range of hair and beard products."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
