import React, { useState } from 'react';
import { dashboard, page1, page2, page3, exit } from '../../constants/images';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItems = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <img src={dashboard} alt='' height={20} width={20} />,
    },
    {
      path: '/page1',
      name: 'Page1',
      icon: <img src={page1} alt='' height={20} width={20} />,
    },
    {
      path: '/page2',
      name: 'Page2',
      icon: <img src={page2} alt='' height={20} width={20} />,
    },
    {
      path: '/page3',
      name: 'Page3',
      icon: <img src={page3} alt='' height={20} width={20} />,
    },
  ];
  return (
    <div className='container'>
      <div className='sidebar' style={{ width: isOpen ? '300px' : '50px' }}>
        <div className='top_section'>
          <img src={exit} alt='' height={20} width={20} onClick={toggle} />
        </div>

        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            aria-activedescendant='active'
          >
            <div className='icon'>{item.icon}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
