import CloseIcon from "../../assets/close.svg";
import ArrowStoryIcon from "../../assets/arrow-story.svg";
import { useState } from "react";
import "./Story.scss";

const Story = () => {

  const [item, setItem] = useState([
    // {
    //   id: 0,
    //   title: 'Склад 1',
    //   text: 'Хранение',
    //   dateStart: '03.06.2022 | 14:00',
    //   dateStartText: 'Старт',
    //   dateEnd: '03.06.2022 | 14:00',
    //   dateEndText: 'Финиш'
    // },
    // {
    //   id: 1,
    //   title: 'Склад 2',
    //   text: 'Хранение',
    //   dateStart: '03.06.2022 | 14:00',
    //   dateStartText: 'Старт',
    //   dateEnd: '03.06.2022 | 14:00',
    //   dateEndText: 'Финиш'
    // },
    // {
    //   id: 2,
    //   title: 'Склад 3',
    //   text: 'Хранение',
    //   dateStart: '03.06.2022 | 14:00',
    //   dateStartText: 'Старт',
    //   dateEnd: '03.06.2022 | 14:00',
    //   dateEndText: 'Финиш'
    // },
  ]);

  const [label, setLabel] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const removeItem = (items) => {
    setItem(item.filter(p => p.id !== items.id));
  };

  const percent = Math.round((10) * 2);

  return (
    <div className="story">
      <div className="story__main-text">
        <span className="story__text">История</span>
        <span className="story__label">
          За все время
          <img src={ArrowStoryIcon} alt="icon" />
          {label && (
            <div className="story__label-modal">
              <ul>
                <li>За все время</li>
                <li>За день</li>
                <li>За месяц</li>
              </ul>
            </div>
          )}
        </span>
      </div>
      <ul className="story__items">
        {item.length !== 0
          ?
          <div>
            {item.map((item, index) => (
              <li key={index} className="story__item">
                <div className="story__item-info">

                  <div className="story__item-info-container">
                    <span className="story__item-info-title">{item.title}</span>
                    <span className="story__item-info-text">{item.text}</span>
                  </div>

                  <div className="story__item-info-container">
                    <span className="story__item-info-date">{item.dateStart}</span>
                    <span className="story__item-info-text">{item.dateStartText}</span>
                  </div>

                  <div className="story__item-info-container">
                    <span className="story__item-info-date">{item.dateEnd}</span>
                    <span className="story__item-info-text">{item.dateEndText}</span>
                  </div>

                  <div>
                    <span className="story__item-close" onClick={() => removeItem(item)}>
                      <img
                        src={CloseIcon}
                        alt="close"
                      />
                    </span>
                  </div>

                </div>
                <div className="story__item-progress">
                  <span onClick={() => toggle(index)} className="story__item-progress-button">
                    Подробнее
                    <img src={ArrowStoryIcon} alt="icon" />
                  </span>
                  <div className="progress">
                    <div style={{ width: `${percent}%` }} className="progress__inner"></div>
                  </div>
                </div>
                {clicked === index ? (
                  <div className="story__item-info">

                    <div className="story__item-info-container">
                      <span className="story__item-info-title">{item.title}</span>
                      <span className="story__item-info-text">{item.text}</span>
                    </div>

                    <div className="story__item-info-container">
                      <span className="story__item-info-date">{item.dateStart}</span>
                      <span className="story__item-info-text">{item.dateStartText}</span>
                    </div>

                    <div className="story__item-info-container">
                      <span className="story__item-info-date">{item.dateEnd}</span>
                      <span className="story__item-info-text">{item.dateEndText}</span>
                    </div>

                  </div>
                ) : null}
              </li>
            ))}
          </div>
          :
          <div style={{ fontSize: '22px', color: '#B6BEC8', textAlign: 'center', width: '100%' }}>История пуста</div>
        }
      </ul>
    </div>
  )
}

export default Story;
