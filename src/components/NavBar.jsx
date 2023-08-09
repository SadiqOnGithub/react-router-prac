import { NavLink } from "react-router-dom";

export default function NavBar() {

  const navLinkStyles = ({ isActive }) => {
    return {
      display: 'inline-block',
      color: 'white',
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: !isActive ? 'underline' : 'none',
      padding: '1.5rem 2rem',
    };
  };

  return (
    <>
      <nav>
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/about" >About</NavLink>
        <NavLink style={navLinkStyles} to="/products" >Products</NavLink>
      </nav>
    </>
  );
}
