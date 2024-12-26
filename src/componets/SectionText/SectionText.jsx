import styles from "./SectionText.module.css";

const SectionText = ({ children, ...props }) => {
  return (
    <div {...props}>
      <p className={styles.paragraph}>{children}</p>
    </div>
  );
};

export default SectionText;
