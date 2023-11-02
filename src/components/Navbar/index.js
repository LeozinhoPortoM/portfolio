import { NavLink } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <nav class="navbar">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>Sobre</NavLink>
      <NavLink to={"/service"}>Serviços</NavLink>
      <NavLink to={"/portfolio"}>Portfólio</NavLink>
      <NavLink to={"/contact"}>Contato</NavLink>
    </nav>
  );
}