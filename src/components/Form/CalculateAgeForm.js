import { useContext } from "react";
import AppContext from "../../store/app-context";

import classes from "./CalculateAgeForm.module.css";

import Input from '../UI/Input/Input'
import Controls from "../Form/FormControl/Controls";

const CalculateAgeForm = (props) => {
  const ctx = useContext(AppContext);

  let labelText = "";
  if (props.animalType === "cat") {
    labelText = "kota";
  }
  if (props.animalType === "dog") {
    labelText = "psa";
  }

  return (
    <form
      onSubmit={(e) => {
        ctx.calculateResult(e, props.animalType);
        console.log('dsadsadassa')
        console.log(ctx)
      }}
      className={classes["animal-age"]}
    >
      <Input
        animalType={ctx.form.animalType}
        labelText={`Podaj imię ${labelText}`}
        placeholder={`Imię ${labelText}`}
        inputType="name"
        type="text"
        value={ctx.form.animalName}
        onChange={ctx.form.setName}
      />
      <Input
        animalType={ctx.form.animalType}
        labelText={`Podaj wiek ${labelText}`}
        placeholder={`Wiek ${labelText}`}
        inputType="age"
        type="number"
        min="1"
        value={ctx.form.animalAge}
        onChange={ctx.form.setAge}
      />
      <Controls />
    </form>
  );
};

export default CalculateAgeForm;
