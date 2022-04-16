import gitHubMark from "../../../assets/GitHub-Mark-Light.png";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <p className={classes["footer__author-info"]}>created by Damian Kuchta</p>
      <a
        className={classes["footer__github-link"]}
        href="https://github.com/damian-kuchta"
      >
        <img
          className={classes["footer__github-mark-img"]}
          src={gitHubMark}
          alt="GitHub Mark"
        />
      </a>
    </footer>
  );
};

export default Footer;
