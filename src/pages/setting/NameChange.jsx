import { useForm } from "react-hook-form";
import { useState } from "react";
import { fetchUserInfo, fetchUserInfoChange } from "../../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const NameChange = () => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchUserInfoChange());
  }, []);

  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      "name": ""
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
        <div className="setting__block-title">Имя - </div>
        <span>
          <div>{user.items.name}</div>
          <button onClick={handleOpen}>Изменить</button>
          {open &&
            <form onSubmit={handleSubmit(onSubmit)} >
              <input
                {...register('name', {
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

export default NameChange;