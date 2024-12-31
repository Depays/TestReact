import { useState } from "react";

import styles from "./Buttons.module.css";

const Button = ({
  disabled,
  transparent = false,
  isWhiteBg = false,
  onClick,
  children,
  ...props
}) => {
  // const { icon, isActive } = props;
  // const [disable, ] = useState(isActive)
  console.log("rerendered");
  return (
    <>
      <button
        onClick={onClick}
        {...props}
        className={
          transparent
            ? styles.buttonTransparent
            : isWhiteBg
            ? styles.buttonWhiteBg
            : styles.button
        }
      >
        {children}
      </button>
    </>
  );
};

export default Button;
