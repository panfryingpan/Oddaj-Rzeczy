import { Link } from "react-router-dom";
import "./navigation.scss";
import * as ROUTES from "../../constants/routes";
import * as Scroll from "react-scroll";

let ScrollLink = Scroll.Link;

export const Navigation = () => (
  <nav className="navigation-wrapper">
    <ul className="navigation__user-buttons">
      <li>
        <Link to={ROUTES.LOGIN}>Zaloguj</Link>
      </li>
      <li>
        <Link to={ROUTES.REGISTER}>Załóż konto</Link>
      </li>
    </ul>
    <ul className="navigation__buttons">
      <li>
        <ScrollLink to="start" duration={500} smooth={true}>
          Start
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="about_app" duration={500} smooth={true}>
          O co chodzi?
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="about_us" duration={500} smooth={true}>
          O nas
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="fundations" duration={500} smooth={true}>
          Fundacja i organizacje
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="contact" duration={500} smooth={true}>
          Kontakt
        </ScrollLink>
      </li>
    </ul>
  </nav>
);
