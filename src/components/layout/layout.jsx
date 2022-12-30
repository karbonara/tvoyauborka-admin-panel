import { Outlet } from "react-router-dom";
import NavMenu from "../nav/NavMenu";
import Header from "../header/Header";

const Layout = () => {
  return (
    <>
      <div className="admin__wrapper">
        <NavMenu />
        <div className="layout__wrapper">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout;