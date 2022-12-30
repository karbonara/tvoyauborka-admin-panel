import { useDispatch, useSelector } from "react-redux";
import RequestUser from "../../components/request-user/RequestUser";
import { selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import { fetchRequest } from "../../redux/slices/request";
import { useEffect } from "react";

const Request = () => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();
  const { request } = useSelector(state => state.request);

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  if (!isAuth) {
    return <Navigate to="/auth" />
  };

  return (
    <>
      <div className="search">
        <div className="clients">
          {request.items.map((item, index) => (
            <div key={index} className="client">
              <div className="client__container">
                <div className="client__text">Почта: {item.email}</div>
                <div className="client__text">Имя: {item.name}</div>
                <div className="client__text">Номер телефона: {item.phone_number}</div>
                <div className="client__text">Дата заявки: {item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <RequestUser /> */}
    </>
  )
}

export default Request;