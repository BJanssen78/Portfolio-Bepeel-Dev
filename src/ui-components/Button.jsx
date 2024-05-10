export const Button = ({ type, name, text, action }) => {
  // type = button type
  // name = button name
  // text = button text
  // action = button action

  return (
    <button className="btn" type={type} name={name} onClick={action}>
      {text}
    </button>
  );
};
export default Button;
