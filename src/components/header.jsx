import '../App.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  
  const cart = useSelector((state) => state.cart?.cartItems || []);
  const totalItems = cart.reduce((sum) => sum + 1, 0); 

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">GSCart</NavLink>
      </div>

      <nav className="nav">
        <NavLink to="/Cart" className={({ isActive }) => (isActive ? 'active' : '')}>
          Cart ({totalItems})
        </NavLink>
        <NavLink to="/orders" className={({ isActive }) => (isActive ? 'active' : '')}>
          Orders
        </NavLink>
      </nav>
    </header>
  );
};
