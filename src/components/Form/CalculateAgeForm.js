import classes from "./CalculateAgeForm.module.css";
import { useContext } from "react";
import AppContext from "../../store/app-context";
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
        max={ctx.form.monthIsActive ? '12' : '99'}
        value={ctx.form.animalAge}
        onChange={ctx.form.setAge}
      />
      <Controls />
    </form>
  );
};

export default CalculateAgeForm;
