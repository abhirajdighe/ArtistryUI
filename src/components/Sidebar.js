import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import "./Styles/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const getLinkClass = (path) => {
    return currentPath === path ? 'active-link block p-2 rounded text-gray-950 ' : 'block p-2 rounded text-gray-400 hover:text-gray-800';
  };

  return (
    <div className="w-[17%] mt-[25px] ml-[10px] bg-white border-r flex flex-col h-[80%] justify-center">
      <nav className="flex-1 p-4 space-y-2 ml-4">
        <Link to="/" className={getLinkClass('/')}><i className="ri-home-line"></i> Home</Link>
        <Link to="/notifications" className={getLinkClass('/notifications')}><i className="ri-notification-2-line"></i> Notifications</Link>
        <Link to="/shop" className={getLinkClass('/shop')}><i className="ri-heart-line"></i> Shop</Link>
        <Link to="/conversation" className={getLinkClass('/conversation')}><i className="ri-mail-line"></i> Conversation</Link>
        <Link to="/wallet" className={getLinkClass('/wallet')}><i className="ri-wallet-line"></i> Wallet</Link>
        <Link to="/subscription" className={getLinkClass('/subscription')}><i className="ri-star-s-line"></i> Subscription</Link>
        <Link to="/profile" className={getLinkClass('/profile')}><i className="ri-user-line"></i> My Profile</Link>
        <Link to="/settings" className={getLinkClass('/settings')}><i className="ri-settings-3-line"></i> Settings</Link>
      </nav>
      <div className="p-4">
        <button onClick={handleLogout} className="block w-full text-left p-2 rounded"><i className="ri-logout-circle-line"></i> Log out</button>
      </div>
    </div>
  );
};

export default Sidebar;
