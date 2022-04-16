import { useContext } from "react";
import AppContext from "../../../store/app-context";

import Button from "../../UI/Button/Button";
import classes from "./MonthInfoPanel.module.css";

const MonthInfoPanel = (props) => {
  const ctx = useContext(AppContext);
  console.log(ctx)

  let btnStyles = !ctx.form.monthIsActive
    ? classes["btn--month"]
    : `${classes["btn--month"]} ${classes["active"]}`;

  return (
    <div className={classes["month-info-panel"]}>
      <p className={classes["month-info-panel__advice"]}>
        Jeżeli Twój pupil ma pozniżej 1 roku, podaj wiek w miesiącach (1-12)
        oraz kliknij:
      </p>
      <Button onClick={ctx.form.toggleMonthActive} btnStyles={btnStyles} type="button">
        Miesiące?
      </Button>
    </div>
  );
};

export default MonthInfoPanel;
