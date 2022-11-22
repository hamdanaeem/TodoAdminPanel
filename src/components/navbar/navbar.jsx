import React from 'react';
import { todoListIcon, userIcon } from '../../constants/images';
import '../../style/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul className='list'>
        <li className='items'>
          <img src={userIcon} alt='' height={20} width={20} />
        </li>
        <li className='items'>
          <img src={todoListIcon} alt='' height={20} width={20} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
