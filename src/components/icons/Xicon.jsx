const Xicon = ({ color, size, className,user }) => {
  return (
    <span
      onClick={user}
      className={`start_player fw-bold ${color ? color : "blue"} ${className} ${
        size && "fs-" + size
      }`}
    >
      x
    </span>
  );
};

export default Xicon