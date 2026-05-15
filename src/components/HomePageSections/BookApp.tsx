import styles from "./BookApp.module.scss";

import Input from "../UI/Input";
import Button from "../UI/Button";

const BookApp = () => {
  return (
    <section id="Book" className={styles.bookApp}>
      <header>
        <h2 className={styles.bookApp__title}>Book an Appointment</h2>
        <p className={styles.bookApp__subTitle}>
          Please fill out the form below to book your appointment
        </p>
      </header>
      <div className="container" data-type="narrow">
        <form className={styles.bookApp__form}>
          <Input
            el="input"
            title="Your name"
            name="name"
            type="text"
            placeholder="John Doe"
          />
          <Input
            el="input"
            title="E-mail address"
            name="email"
            type="email"
            placeholder="johnny1999@gmail.com"
          />
          <Input el="input" title="Date" name="date" type="date" />
          <Input
            el="input"
            title="Phone number"
            name="phone"
            type="tel"
            placeholder="555-555-5555"
          />
          <Input el="select" title="Select service" name="service">
            <option selected disabled>
              Hair Cut
            </option>
            <option value="Adult Cut">Adult Cut</option>
            <option value="Beard Trim">Beard Trim</option>
            <option value="Kid Cut">Kid Cut</option>
            <option value="How Towel Shave">How Towel Shave</option>
            <option value="Cut & Wash">Cut & Wash</option>
            <option value="Head & Beard">Head & Beard</option>
          </Input>
          <Input el="input" title="Barber's name (optional)" name="barber" />
          <Button type="button" dataType="accent">
            Book appointment
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookApp;
