import { NavLink } from "react-router-dom";
import "./topbar.css";
export default function TopBar() {
  let user = false;
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-square-pinterest"></i>
          <i class="fa-brands fa-square-twitter"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/">ABOUT</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/">CONTACT</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/write">WRITE</NavLink>
            </li>
            <li className="topListItem">{user && "LOGOUT"}</li>
            {user && (
              <NavLink to="/settings" className="topListItem">
                SETTINGS
              </NavLink>
            )}
          </ul>
        </div>
        {user ? (
          <div className="topRight">
            <img className="topImg" src="/assets/img/avatar.jpg" alt="" />
          </div>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <NavLink to="/login">LOGIN</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/register">REGISTER</NavLink>
            </li>
            <i class="fa-solid fa-search"></i>
          </ul>
        )}
      </div>
    </div>
  );
}
