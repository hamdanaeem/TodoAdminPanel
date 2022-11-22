import { IoAddCircleOutline } from 'react-icons/io5';
import { actionIcon, todoIcon } from '../../constants/images';
import '../../style/dropdown.css';

const Dropdown = ({ onTap, todoList }) => {
  return (
    <>
      <div class='dropdown'>
        <IoAddCircleOutline />
        <div class='dropdown-content'>
          {todoList.map((item, index) => (
            <a
              key={index}
              href='#array'
              onClick={() => {
                onTap({ name: item.name, hide: false });
              }}
            >
              <img
                className='icon'
                src={item.name === 'Todo' ? todoIcon : actionIcon}
                alt=''
                height={20}
                width={20}
              />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
