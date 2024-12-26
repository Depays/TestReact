import { useState } from "react";

import styles from "./Buttons.module.css";

const Button = ({ disabled, onClick, children, ...props }) => {
  // const { icon, isActive } = props;
  // const [disable, ] = useState(isActive)
  console.log("rerendered");
  return (
    <>
      <button onClick={onClick} {...props} className={styles.button}>
        {children}
      </button>
    </>
  );
};

export default Button;
