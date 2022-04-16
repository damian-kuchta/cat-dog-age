import { useContext } from "react";
import AppContext from "../../store/app-context";

import classes from "./AnimalChoice.module.css";

const AnimalChoice = (props) => {
  const ctx = useContext(AppContext);

  let animalType = "";

  if (props.animalType === "cat") {
    animalType = "Kot";
  }
  if (props.animalType === "dog") {
    animalType = "Pies";
  }

  return (
    <div className={classes["info-wrap"]}>
      <div
        onClick={(e)=>ctx.chooseAnimal(e,props.animalType)}
        data-animal={props.animalType}
        tabIndex="0"
        role="button"
        className={`${classes["animal-choice"]} ${
          classes[`animal-choice--${props.animalType}`]
        }`}
      ></div>
      <p className={classes["animal-info"]}>{animalType}?</p>
    </div>
  );
};

export default AnimalChoice;
