import { useContext } from "react";

import Button from '../../UI/Button/Button';
import AppContext from '../../../store/app-context'
import classes from "./FormControlPanel.module.css";

const FormControlPanel = (props) => {
  const ctx = useContext(AppContext);

  return (
    <div className={classes["control-btns"]}>
      <Button
        type="submit"
        btnStyles={classes["btn--submit"]}
      >
        Oblicz wiek!
      </Button>
      <Button
        type="button"
        onClick={ctx.goToStartPage}
        btnStyles={classes["btn--back"]}
      >
        Wróć
      </Button>
    </div>
  );
};

export default FormControlPanel;
