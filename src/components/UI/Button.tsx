import styles from "./Button.module.scss";

import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonProps = {
  type: "button";
  dataType: "accent" | "primary";
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  type: "link";
  dataType: "accent" | "primary";
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

const Button = (props: ButtonProps | AnchorProps) => {
  if (props.type === "link") {
    const { dataType, children, ...rest } = props;
    return (
      <a className={styles.button} data-type={dataType} {...rest}>
        {children}
      </a>
    );
  }

  const { dataType, children, ...rest } = props;
  return (
    <button className={styles.button} data-type={dataType} {...rest}>
      {children}
    </button>
  );
};

export default Button;
