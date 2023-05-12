const Oicon = ({ color, size, className ,user}) => {
  return (
    <span  onClick={user}
      className={`start_player   fw-bold ${color ? color : "yellow"} ${className} ${
        size && "fs-" + size
      }`}
    >
      o
    </span>
  );
};

export default Oicon;
