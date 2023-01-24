import { useForm } from "react-hook-form";
import { useState } from "react";
import { fetchUserInfo, fetchUserInfoChange } from "../../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const PhoneChange = () => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchUserInfoChange());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      "phone_number": ""
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
        <div className="setting__block-title">Номер телефона - </div>
        <span>
          <div>{user.items.phone_number}</div>
          <button onClick={handleOpen}>Изменить</button>
          {open &&
            <form onSubmit={handleSubmit(onSubmit)} >
              <input
                {...register('phone_number', {
                  required: true
                })}
                placeholder="Впишите свой номер"
                type="number"
              />
              <button type="submit">Добавить</button>
            </form>
          }
        </span>
      </div>
    </span>
  )
}

export default PhoneChange;