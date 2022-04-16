import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1 className={classes["header__title"]}>Wiek pupila</h1>
      <h2 className={classes["header__info"]}>
        Sprawdź ile ludzkich lat ma Twój pupil!
      </h2>
    </header>
  );
};

export default Header;
