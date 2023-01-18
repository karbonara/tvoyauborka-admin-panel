import { useForm } from "react-hook-form";
import { useState } from "react";
import { fetchUserInfo, fetchUserInfoChange } from "../../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const PasswordChange = () => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchUserInfoChange());
  }, []);

  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      "password": ""
    }
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const onSubmit = async (values) => {
    const data = await dispatch(fetchUserInfoChange(values));
    setOpen(!open);
    reset();
    return data;
  }
  return (
    <span>
      <div className="setting__block">
        <div className="setting__block-title">Пароль - </div>
        <span>
          <div>{user.items.password}</div>
          <button onClick={handleOpen}>Изменить</button>
          {open &&
            <form onSubmit={handleSubmit(onSubmit)} >
              <input
                {...register('password', {
                  required: true
                })}
                placeholder="Впишите свое имя"
                type="text"
              />
              <button type="submit">Добавить</button>
            </form>
          }
        </span>
      </div>
    </span>
  )
}

export default PasswordChange;