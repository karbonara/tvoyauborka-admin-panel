import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/slices/user";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/auth";
import { useForm } from "react-hook-form";
import { fetchRoleChange } from "../../redux/slices/role";

const Users = () => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const users = Object.values(user.items);

  useEffect((id) => {
    dispatch(fetchUser());
    dispatch(fetchRoleChange(id));
  }, [dispatch]);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      // "Администратор": "",
      "Менеджер": ""
    }
  });
  const onSubmit = async (id) => {
    const data = await dispatch(fetchRoleChange(id));
    console.log(dispatch(fetchRoleChange(id)));
    return data;
  }

  const isAuth = useSelector(selectIsAuth);
  if (!localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/auth" />;
  }
  return (
    <div className="search">
      <div className="search__container">
        <input type="text" placeholder="Введите телефон" />
      </div>
      <div className="clients">
        {users.map((item, index) => (
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
            <div className="client__container">
              <form onSubmit={handleSubmit(onSubmit)} >
                <select>
                  <option {...register('Администратор')} value="Администратор">Администратор</option>
                  <option {...register('Менеджер')} value="Менеджер">Менеджер</option>
                  <option value="Пользователь">Пользователь</option>
                  <option value="cleaner">Уборщик</option>
                </select>
                <button type="submit">Добавить</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users;