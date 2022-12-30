import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchUserInfo } from "../../redux/slices/user";

const Setting = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  console.log(user);
  if (!isAuth) {
    return <Navigate to="/auth" />
  };
  return (
    <div className="page__wrapper">
      <div className="search">
        <div className="clients">
          <div>Настройки</div>
          <div>
            <div>Почта - </div>
            <div>{user.items.email}</div>
          </div>
          <div>
            <div>Права доступа - </div>
            <div>{user.items.role.name}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting;