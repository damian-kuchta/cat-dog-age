import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes["animal-age-wrap"]}>
      <label
        htmlFor={`${props.animalType}-${props.inputType}`}
        className={classes["animal-age__label"]}
      >
        {props.labelText}:
      </label>
      <input
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        required
        placeholder={props.placeholder}
        type={props.type}
        min={props.min}
        max={props.max}
        className={classes["animal-age__input"]}
        id={`${props.animalType}-${props.inputType}`}
      />
    </div>
  );
};

export default Input;
