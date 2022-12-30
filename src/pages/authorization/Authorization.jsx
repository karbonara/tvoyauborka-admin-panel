import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import "./Authorization.scss";

const Authorization = () => {

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      "login": "",
      "password": ""
    }
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    localStorage.setItem('token', data.payload.accessToken);

    if (!data.payload) {
      return alert('Не удалось авторизоваться!');
    }

    if (data.payload) {
      localStorage.setItem('token', data.payload.accessToken);
    }
  };

  if (isAuth) return (
    <Navigate to="/" />
  )

  return (
    <div className="authorization">
      <div className="authorization__header">
        Авторизация
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Логин
            <input {...register('login', { required: 'Укажите логин' })} type="text" />
          </label>

          <label>
            Пароль
            <input {...register('password')} type="password" />
          </label>
        </div>
        <button type="submit" className="authorization__button">Войти</button>
      </form>
    </div>
  )
}

export default Authorization;