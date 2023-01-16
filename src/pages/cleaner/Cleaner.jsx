import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/auth";

const Cleaner = () => {
  const isAuth = useSelector(selectIsAuth);
  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/auth" />;
  }
  return (
    <div>Cleaner</div>
  )
}

export default Cleaner;