import styles from "./Input.module.scss";

import type { ComponentPropsWithoutRef, ReactNode } from "react";

type InputProps = {
  el: "input";
  title: string;
  name: string;
} & ComponentPropsWithoutRef<"input">;

type SelectProps = {
  el: "select";
  title: string;
  name: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"select">;

const Input = (props: InputProps | SelectProps) => {
  if (props.el === "input") {
    const { name, title, ...rest } = props;

    let store = "";
    let store_regular = "";
    let swich = false;
    for (const char of title) {
      if (char === "(") {
        swich = true;
      } else if (char === ")") {
        swich = false;
        store_regular += char;
      }

      if (!swich && char !== "(" && char !== ")") {
        store += char;
      }
      if (swich) {
        store_regular += char;
      }
    }

    console.log(store_regular);

    const titleMod = (
      <p>
        {store}
        <span>{store_regular}</span>
      </p>
    );

    return (
      <label className={styles.label} htmlFor={name}>
        <span className={styles.label__name}>{titleMod}</span>
        <input
          className={styles.label__input}
          id={name}
          name={name}
          {...rest}
        />
      </label>
    );
  }

  const { name, title, ...rest } = props;

  return (
    <label className={styles.label} htmlFor={name}>
      <span className={styles.label__name}>{title}</span>
      <select className={styles.label__input} id={name} name={name} {...rest} />
    </label>
  );
};

export default Input;
