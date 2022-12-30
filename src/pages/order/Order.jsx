import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../../redux/slices/order";
import { selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

const Order = () => {

  const dispatch = useDispatch();
  const { order } = useSelector(state => state.order);

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);

  const isAuth = useSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to="/auth" />
  };

  return (
    <div className="search">
      <div className="search__container">
        <input type="text" placeholder="Введите телефон" />
      </div>
      <div className="clients">
        {order.items.map((item, index) =>
        (<div key={index} className="client">
          <div className="client__container">
            <div className="client__text">Уборка: {item.group}</div>
            <div className="client__text">Тип помещения: {item.type}</div>
            <div className="client__text">Количество ванных комнат: {item.bathroom_count}</div>
            <ul className="client__orders client__text">
              <li>{item.additional_services.map((item, index) => (
                <span key={index}>
                  <div>Вид уборки: {item.name}</div>
                  <div>Цена: {item.price}</div>
                  <div>Количество: {item.count}</div>
                </span>
              ))}</li>
            </ul>
            <div className="client__text">Дата: {item.date}</div>
          </div>
          <div className="client__container">
            <div className="client__text">Адрес: {item.address}</div>
            <div className="client__text">Домофон: {item.intercom}</div>
            <div className="client__text">Оплата: {item.payment_type}</div>
            <div className="client__text">Комментарий: {item.comment}</div>
          </div>
        </div>)
        )}
      </div>
    </div>
  )
}

export default Order;