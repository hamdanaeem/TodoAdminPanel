import { group, home, task } from '../../constants/images';
import '../../style/bottomNavBar.css';

const BottomNavBar = () => {
  return (
    <div className='navbar' id='myNavbar'>
      <ul className='list'>
        <li className='items'>
          <img src={home} alt='' height={20} width={20} />
        </li>
        <li className='items'>
          <img src={group} alt='' height={20} width={20} />
        </li>
        <li className='items'>
          <img src={task} alt='' height={20} width={20} />
        </li>
      </ul>
    </div>
  );
};

export default BottomNavBar;
