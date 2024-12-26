import styles from "./SectionTitle.module.css";

const SectionTitle = ({ children, ...props }) => {
  return (
    <div {...props}>
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
};

export default SectionTitle;
