import { useForm } from "react-hook-form";
import { useState } from "react";
import { fetchUserInfo, fetchUserInfoChange } from "../../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MailChange = () => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchUserInfoChange());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      "email": ""
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
        <div className="setting__block-title">Почта - </div>
        <span>
          <div>{user.items.email}</div>
          <button onClick={handleOpen}>Изменить</button>
          {open &&
            <form onSubmit={handleSubmit(onSubmit)} >
              <input
                {...register('email', {
                  required: true
                })}
                placeholder="Впишите свою почту"
                type="email"
              />
              <button type="submit">Добавить</button>
            </form>
          }
        </span>
      </div>
    </span>
  )
}

export default MailChange;