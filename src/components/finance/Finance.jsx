import ArrowRightBlue from "../../assets/arrowRightBlue.svg";
import "./Finance.scss";

const Finance = () => {
  return (
    <div className="finance">
      <span className="finance__title">Финансы</span>
      <div className="finance__item">
        <div className="finance__item-balance">Баланс баллов</div>
        <div className="finance__item-number">3500</div>
        <div>
          <a className="finance__item-link" href="/">
            Обменять
            <img src={ArrowRightBlue} alt="arrow" />
          </a>
          <a className="finance__item-link" href="/">
            Ввести промокод
            <img src={ArrowRightBlue} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Finance;
