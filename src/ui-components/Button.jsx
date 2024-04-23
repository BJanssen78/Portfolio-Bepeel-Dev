export const Button = ({ type, name, text, action }) => {
  return (
    <button className="btn" type={type} name={name} onClick={action}>
      {text}
    </button>
  );
};
export default Button;
