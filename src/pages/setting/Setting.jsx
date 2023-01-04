import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchUserInfo, fetchUserInfoChange } from "../../redux/slices/user";
import "./Setting.scss";
import { useForm } from "react-hook-form";

const Setting = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchUserInfoChange());
    // console.log(dispatch(fetchUserInfoChange()));
  }, []);

  // console.log(user);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      "phone_number": ""
    }
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchUserInfoChange(values));
    console.log(data);
    return data;
  }

  if (!isAuth) {
    return <Navigate to="/auth" />
  };
  return (
    <div className="page__wrapper">
      <div className="search setting">
        <div className="clients">
          <div className="setting__block">
            <div className="setting__block-title">Почта - </div>
            <div>{user.items.email}</div>
            <button>Изменить</button>
          </div>
          <div className="setting__block">
            <div className="setting__block-title">Имя - </div>
            {
              user.items.name ?
                (<><div>{user.items.name}</div><button>Изменить</button></>)
                :
                (<><div>Напишите имя</div><button>Добавить</button></>)
            }
          </div>
          <div className="setting__block">
            <div className="setting__block-title">Пароль - </div>
            <div>*******</div>
            <button>Изменить</button>
          </div>
          <div className="setting__block">
            <div className="setting__block-title">Номер телефона - </div>
            {
              user.items.phone_number ?
                (<>
                  <div>{user.items.phone_number}</div>
                  <button>Изменить</button>
                </>)
                :
                (<form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register('phone_number')}
                    placeholder="Напишите номер телефона" type="number" />
                  <button type="submit">Добавить</button>
                </form>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting;