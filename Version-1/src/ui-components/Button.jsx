export const Button = ({ type, name, text }) => {
  // type = button type
  // name = button name
  // text = button text
  // action = button action

  return (
    <button
      className="btn"
      type={type}
      name={name}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      {text}
    </button>
  );
};
export default Button;
