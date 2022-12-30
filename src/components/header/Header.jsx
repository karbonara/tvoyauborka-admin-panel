import Bell from "../../assets/bell.svg";
import Avatar from "../../assets/avatar.png";
import Location from "../../assets/location.svg";
import Localization from "../../assets/localization.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useEffect } from "react";
import { fetchUserInfo } from "../../redux/slices/user";
import "./Header.scss";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const { user } = useSelector(state => state.user);

  const onClickLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  return (
    <header>
      <nav className="nav__wrapper">
        <span className="nav__text">
          <img src={Location} alt="" />
          <span>
            Москва
          </span>
        </span>

        <div className="nav__info">
          <span className="nav__text localization">
            <img src={Localization} alt="" />
            <span>Русский</span>
          </span>
          <button className="nav__bell">
            <img src={Bell} alt="icon" />
          </button>
          <div className="nav__modal-wrapper">
            <img className="nav__user" onClick={() => setToggleMenu(!toggleMenu)} src={Avatar} alt="" />
            {toggleMenu && (
              <div>
                <div className="nav__modal">
                  <div className="nav__modal-user-mail">{user.items.email}</div>
                  <div className="nav__modal-user-name">{user.items.name}</div>
                  <div className="nav__modal-user-name">{user.items.role.name}</div>
                  <div className="modal__buttons">
                    <div onClick={onClickLogout} className="modal__button-exit">Выйти</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;