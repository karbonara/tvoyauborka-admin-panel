import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/slices/user";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/auth";

const Users = () => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const isAuth = useSelector(selectIsAuth);

  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className='search'>
      <div className="search__container">
        <input type="text" placeholder="Введите телефон" />
      </div>
      <div className="clients">
        {user.items.email}
        {/* {user.items.map((item, index) => (
          <div key={index} className="client">
            <div className="client__container">
              <div className="client__text">Email: {item.email}</div>
              <div className="client__text">Имя: {item.name}</div>
              <div className="client__text">Адрес: {item.address}</div>
              <div className="client__text">Телефон: {item.phone_number}</div>
            </div>
            <div className="client__container">
              <div className="client__text">Компания: {item.company}</div>
              <div className="client__text">Контактный номер: {item.contract_number}</div>
              <div className="client__text">TIN: {item.TIN}</div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Users;