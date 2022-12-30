import Auth from "./pages/auth/Auth";
import Authorization from "./pages/authorization/Authorization";
import Registration from "./pages/registration/Registration";
import Request from "./pages/request/Request";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Order from "./pages/order/Order";
import Users from "./pages/users/Users";
import Main from "./pages/main/Main";
import Setting from "./pages/setting/Setting";
import Error from "./pages/error/Error";
import Work from "./pages/work/Work";
import Manager from "./pages/manager/Manager";
import Cleaner from "./pages/cleaner/Cleaner";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "./redux/slices/auth";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuth())
  }, []);

  return (
    <div className="App">
      <div className="page__wrapper">
        <Routes>
          {/* Авторизация */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/authorization" element={<Authorization />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Error />} />
          {/* Админ панель */}
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/request" element={<Request />} />
            <Route path="/order" element={<Order />} />
            <Route path="/users" element={<Users />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/work" element={<Work />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/cleaner" element={<Cleaner />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
