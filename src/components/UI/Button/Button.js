import classes from "./Button.module.css";

const Button = (props) => {
  let externalClasses = props.btnStyles || "";

  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${classes.btn} ${externalClasses}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
