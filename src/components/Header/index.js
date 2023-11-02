import "./style.css";

import Navbar from "../Navbar";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header class="header">
      <div class="logo">
        <a href="#">
          <img src={logo} />
        </a>
      </div>

      <div class="menus">
        <i class="bx bx-menu" id="menu-icon"></i>

        <Navbar />

        <div class="toggle">
          <i class="bx bx-moon toggle-icon"></i>
        </div>
      </div>
    </header>
  );
}
