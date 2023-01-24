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
            <span className="nav__user" onClick={() => setToggleMenu(!toggleMenu)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" fill="#4c75f2" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </span>
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