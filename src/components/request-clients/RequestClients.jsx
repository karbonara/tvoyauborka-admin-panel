import { fetchRequestDelete } from "../../redux/slices/request";
import "./RequestClients.scss";
import { useDispatch } from "react-redux";
const RequestClients = ({ sortedUsers }) => {

  const dispatch = useDispatch();
  const onClickRemove = (id) => {
    dispatch(fetchRequestDelete(id));
  };
  return (
    <div className="clients">
      {sortedUsers.map((item, index) => (
        <div key={index} className="client">
          <div className="client__container">
            <div className="client__text">Имя: {item.name}</div>
            <div className="client__text">Итого: {item.price}</div>
            <div className="client__text">Адрес: {item.adress}</div>
            <div className="client__text">Телефон: {item.phone_number}</div>
          </div>
          <div className="client__container">
            <div className="client__text">Действующие заказы</div>
            <ul className="client__orders">
              <li>{item.orders.map((active, index) => (
                <p key={index}>{active.order} руб.</p>
              ))}</li>
            </ul>
          </div>
          <div className="client__container client__buttons">
            <button onClick={onClickRemove} className="client__button">Изменить</button>
            <button className="client__button">Удалить</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RequestClients;