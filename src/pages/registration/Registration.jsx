import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { fetchRegister, selectIsAuth } from '../../redux/slices/auth';
import { Navigate } from 'react-router-dom';
import "../authorization/Authorization.scss";

const Registration = () => {

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      "email": "",
      "password": ""
    }
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert('Не удалось регистрироваться!');
    }

    if ('token' in data.payload) {
      localStorage.setItem('token', data.payload.accessToken);
    }
  };

  if (isAuth) {
    return (
      <Navigate to="/" />
    );
  }

  return (
    <div className="authorization">
      <div className="authorization__header">
        Регистрация
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Логин
            <input {...register("email", { required: 'Укажите логин' })} type="" />
          </label>

          <label>
            Пароль
            <input {...register("password")} type="password" />
          </label>
        </div>
        <button type="submit" className="authorization__button">Войти</button>
      </form>
    </div>
  )
}

export default Registration;