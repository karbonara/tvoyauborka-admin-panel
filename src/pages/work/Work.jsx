import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/auth";

const Work = () => {
  const isAuth = useSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to="/auth" />
  };

  return (
    <div className="page__wrapper">
      <div className="search">
        <div className="clients">WORK</div>
      </div>
    </div>
  )
}

export default Work;