import MonthInfoPanel from "./MonthInfoPanel";
import FormControlPanel from "./FormControlPanel";
import classes from "./Controls.module.css";

const Controls = (props) => {
  return (
    <div className={classes.controls}>
      <MonthInfoPanel />
      <FormControlPanel />
    </div>
  );
};

export default Controls;
