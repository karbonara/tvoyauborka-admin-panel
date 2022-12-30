import ServicesActive from "../../components/services-active/ServicesActive";
import Services from "../../components/services/Services";
import Story from "../../components/story/Story";
import Calendar from "react-calendar";
import { useState } from "react";
import "./Main.scss";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";


const Main = () => {
  const [value, onChange] = useState(new Date());

  const isAuth = useSelector(selectIsAuth);
  if (!isAuth) {
    return <Navigate to="/auth" />
  };

  return (
    <div className="page__wrapper">
      <section className="page__main">
        <div className="page__main-container">
          <Services />
          <Story />
        </div>
        <div className="page__main-container">
          <ServicesActive />
          <div className="admin__calendar-main">
            <Calendar className="admin__calendar" onChange={onChange} value={value} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;