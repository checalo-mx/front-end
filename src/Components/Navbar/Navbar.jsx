import React from "react";
import styles from "./Navbar.module.scss";
import menu_burguer from "./svg/menu_burguer.svg";
import user_svg from "./svg/user.svg";

const Navbar = () => {
  return (
    <>
      <div
        className={`container-sm-fluid d-flex justify-content-around align-items-center ${styles.nav_container}`}
      >
        <div className="row">
          <div className="col">
            <img className={`${styles.nav_icon}`} src={menu_burguer} alt="" />
          </div>
          <div className="col">checalo.mx</div>
          <div className="col">
            <img className={`${styles.nav_icon}`} src={user_svg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
