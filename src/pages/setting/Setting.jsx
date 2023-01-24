import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchUserInfo, fetchUserInfoChange } from "../../redux/slices/user";
import PhoneChange from "./PhoneChange";
import MailChange from "./MailChange";
import NameChange from "./NameChange";
import "./Setting.scss";

const Setting = () => {

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  // const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchUserInfoChange());
  }, [dispatch]);

  if (!localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/auth" />;
  }
  return (
    <div className="page__wrapper">
      <div className="search setting">
        <div className="clients">
          <MailChange />
          <NameChange />
          <PhoneChange />
        </div>
      </div>
    </div>
  )
}

export default Setting;