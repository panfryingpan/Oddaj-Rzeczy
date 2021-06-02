import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./Pages/Home/home";
import { Login } from "./Pages/Login/login";
import { Logout } from "./Pages/Logout/logout";
import { Register } from "./Pages/Register/register";
import * as ROUTES from "./constants/routes";
function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.REGISTER} component={Register} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.LOGOUT} component={Logout} />
      </div>
    </Router>
  );
}

export default App;
