import Time from "../../assets/time.svg"
import ArrowRight from "../../assets/arrowRight.svg";
import "./ServicesActive.scss";

const ServicesActive = () => {
  const servicesItems = [
    // { date: '15.10.2022', day: '55', link: 'https://www.google.com/' },
    // { date: '20.10.2022', day: '245', link: 'https://www.google.com/' },
    // { date: '03.11.2022', day: '45', link: 'https://www.google.com/' },
  ];

  return (
    <div className="services-active">
      <span className="services__title">Активные услуги</span>
      <ul className="services-active__items">
        {servicesItems.length !== 0
          ?
          <>
            {servicesItems.map((item, index) => (
              <li key={index} className="services-active__item">
                <img src={Time} alt="" />
                <div className="services__item-title">Склад</div>
                <div className="services__item-date">до {item.date}</div>
                <div className="services__item-info">
                  <a href={item.link}>Еще {item.day} дней
                    <img src={ArrowRight} alt="" />
                  </a>
                </div>
              </li>
            ))}
          </>
          :
          <div style={{ fontSize: '22px', color: '#B6BEC8', textAlign: 'center', width: '100%' }}>Нет активных услуг</div>
        }
      </ul>
    </div>
  )
}

export default ServicesActive;
