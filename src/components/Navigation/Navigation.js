import { Link } from "react-router-dom";
import "./navigation.scss";
import * as ROUTES from "../../constants/routes";

export const Navigation = () => (
  <div className="navigation-wrapper">
    <ul>
      <li>
        <Link to={ROUTES.LOGIN}>Zaloguj</Link>
      </li>
      <li>
        <Link to={ROUTES.REGISTER}>Załóż konto</Link>
      </li>
    </ul>
    <ul>
      <li></li>
      <li></li>
      <li>
        <Link to={ROUTES.HOME}>Strona główna</Link>
      </li>
      <li>
        <Link to={ROUTES.LOGOUT}>Wyloguj</Link>
      </li>
    </ul>
  </div>
);
