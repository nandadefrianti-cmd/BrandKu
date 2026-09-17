// import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function Header() {
  // const navigate = useNavigate();
  return (
    <header className="flex justify-between px-4 py-2 bg-white shadow">
      <h1>Brandku</h1>
      <nav className="flex gap-5">
        <NavLink to="/" className="text-gray-700 hover:text-gray-900">
          Home
        </NavLink>
        <NavLink to="/about" className="text-gray-700 hover:text-gray-900">
          About
        </NavLink>
        <NavLink to="/pricing" className="text-gray-700 hover:text-gray-900">
          Pricing
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
