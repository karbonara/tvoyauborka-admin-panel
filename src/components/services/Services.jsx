import iconServices from "../../assets/services_1.svg";
import iconStock from "../../assets/stock.svg";
import iconDryCleaning from "../../assets/dry-cleaning.svg";
import ArrowRight from "../../assets/arrowRight.svg";
import ArrowStoryIcon from "../../assets/arrow-story.svg";
import "./Services.scss";

const Services = () => {

  const servicesItems = [
    // { title: 'Клининг', price: 2500, footage: '2К КВ, 45 М2', img: iconServices },
    // { title: 'Клининг', price: 1500, footage: '1К КВ, 35 М2', img: iconStock },
    // { title: 'Клининг', price: 4500, footage: '3К КВ, 65 М2', img: iconDryCleaning },
  ];

  return (
    <div className="services__wrapper">
      <div className="services__main-text">
        <span className="services__text">Услуги</span>
        <span className="services__label">
          Только Москва
          <img src={ArrowStoryIcon} alt="arrow" />
        </span>
      </div>
      <ul className="services__items">
        {servicesItems.length !== 0
          ?
          <>
            {servicesItems.map((item, index) => (
              <li key={index} className="services__item">
                <img src={item.img} alt="icon" />
                <div className="services__item-title">{item.title}</div>
                <div className="services__item-price">₽ {item.price}</div>
                <div className="services__item-info">
                  {item.footage}
                  <img src={ArrowRight} alt="arrow" />
                </div>
              </li>
            ))}
          </>
          :
          <div style={{ fontSize: '22px', color: '#B6BEC8', textAlign: 'center', width: '100%' }}>Нет услуг</div>
        }
      </ul>
    </div>
  );
}

export default Services;