import styles from "./ProjectItem.module.css";

import Button from "../Button/Button";
import { useState } from "react";

const ProjectItem = ({ image, title, type, link, children, ...props }) => {
  const [isShown, setIsShown] = useState(false);

  const handleMouseOver = () => {
    setIsShown(true);
  };

  const handleMouseOut = () => {
    setIsShown(false);
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <li {...props} className={styles.projectItem}>
        <img
          className={isShown ? styles.onHover : styles.basic}
          src={image}
          alt="ProjectImage"
        />
        <h3 className={isShown ? styles.basicTitleHover : styles.basicTitle}>
          {title}
        </h3>
        <span>{type}</span>
        <div>
          {isShown && (
            <Button style={{ marginTop: "24px" }} isWhiteBg={true}>
              View&nbsp;project
            </Button>
          )}
        </div>
      </li>
    </div>
  );
};

export default ProjectItem;
