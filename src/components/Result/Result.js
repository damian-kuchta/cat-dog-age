import { useContext } from "react";
import AppContext from "../../store/app-context";

import classes from "./Result.module.css";

const Result = (props) => {
  const ctx = useContext(AppContext);

  return (
    <div className={classes.result}>
      <div className={classes["result__popup"]}>
        <i
          onClick={ctx.goToStartPage}
          className={`${classes["result__close-icon"]} far fa-times-circle `}
        ></i>
        <p className={classes["result__info"]}>
          {ctx.result}
        </p>
      </div>
    </div>
  );
};

export default Result;
