function SampleNextArrow(props) {
  const { className, style, onClick, children } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default SampleNextArrow;
