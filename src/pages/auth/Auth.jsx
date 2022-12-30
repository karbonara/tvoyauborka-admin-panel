import { Link } from "react-router-dom";
import "../authorization/Authorization.scss"
const Auth = () => {
  return (
    <div className="authorization">
      <div className="authorization__employees">
        <div className="authorization__employee">
          <Link to="/authorization">
            Авторизоваться
          </Link>
        </div>
        <div className="authorization__employee">
          <Link to="/registration">
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Auth;