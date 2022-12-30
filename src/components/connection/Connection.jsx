import Support from "../../assets/support.svg";
import Telegram from "../../assets/telegram.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import "./Connection.scss";

const Connection = () => {
  const social = [
    { link: '/', title: 'Чат с поддержской', img: Support },
    { link: '/', title: 'Telegram', img: Telegram },
    { link: '/', title: 'WhatsApp', img: Whatsapp },
  ]
  return (
    <div className="connection">
      <span className="connection__title">Связь</span>
      <ul className="connection__items">
        {
          social.map((item, index) => (
            <li key={index} className="connection__item">
              <img src={item.img} alt="" />
              <a href={item.link}>{item.title}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Connection;
