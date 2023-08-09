import { NavLink, Outlet } from "react-router-dom";

export default function Products() {
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
      <h1>Products</h1>
      <input type="search" placeholder="search products" />
      <nav style={{
        backgroundColor: '#404040',
      }}>
        <NavLink style={navLinkStyles} to="featured">Featured</NavLink>
        <NavLink style={navLinkStyles} to="new">New</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
