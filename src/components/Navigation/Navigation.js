import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

export const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LOGIN}>Zaloguj</Link>
      </li>
      <li>
        <Link to={ROUTES.REGISTER}>Zarejestruj</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Strona główna</Link>
      </li>
      <li>
        <Link to={ROUTES.LOGOUT}>Wyloguj</Link>
      </li>
    </ul>
  </div>
);
