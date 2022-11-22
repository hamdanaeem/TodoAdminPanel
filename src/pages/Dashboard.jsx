import { useState } from 'react';
import '../style/dashboard.css';
import { HiBars3, HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { actionIcon, preview, todoIcon } from '../constants/images';
import Dropdown from '../components/dropdown/dropdown';
import MobilePreview from '../components/mobilePreview/mobilePreview';

const Dashboard = () => {
  //drop down list items
  const itemList = [{ name: 'Todo' }, { name: 'Call to Action' }];
  //react hooks for updating list with changes
  const [mylist, updateTodoState] = useState([]);

  //remove items from todo list
  const handleRemoveItem = index => {
    const newList = mylist.filter((_, i) => i !== index);
    updateTodoState(newList);
  };

  //add items to todo list
  const getData = value => {
    updateTodoState(array => [...array, value]);
  };

  //hide preview items
  const hidePreviewItem = (index, todo) => {
    const newTodos = [...mylist];
    newTodos[index] = todo;
    updateTodoState(newTodos);
    console.log(mylist);
  };
  return (
    // Homefeed and Item Row
    <div className='row'>
      {/*Menu*/}
      <div className='menuItems'>
        <div className='topRow'>
          <div className='heading'>
            <HiOutlineDevicePhoneMobile />
            <div>Homefeed</div>
          </div>
          {/* dropdown component */}
          <div>
            <Dropdown todoList={itemList} onTap={getData} />
          </div>
        </div>
        <div>
          <div className='livePreviewContainer'>
            <img src={preview} alt='' height={20} width={20} />
            <div className='textLivePreview'>Live Preview</div>
          </div>
          <span class='dividerHorizontal'> </span>
          <div className='actionContainer'>
            <img src={todoIcon} alt='' height={20} width={20} />
            <div className='textLivePreview'>Todo</div>
          </div>
          <div className='actionContainer'>
            <img src={actionIcon} alt='' height={20} width={20} />
            <div className='textLivePreview'>Call to Action</div>
          </div>
        </div>
      </div>
      <span class='divider'> </span>
      <div className='todoItemsAndPreviewRow'>
        <div className='listOrientation'>
          {/* editing list items */}
          {mylist.map((item, index) => (
            <div key={index} className='itemsListContainer'>
              <HiBars3 />
              <div className='itemNameContainer'>
                <img
                  src={item.name === 'Todo' ? todoIcon : actionIcon}
                  alt=''
                  height={20}
                  width={20}
                />
                <div className='textLivePreview'>{item.name}</div>
              </div>
              <div className='iconContainer'>
                {/* delete list items */}
                <RiDeleteBinLine
                  className='deleteIcon'
                  onClick={() => handleRemoveItem(index)}
                />
                {/* hide preview */}
                <div
                  onClick={() =>
                    hidePreviewItem(index, {
                      name: item.name,
                      hide: !item.hide,
                    })
                  }
                >
                  {item.hide === true ? (
                    <BsFillEyeSlashFill className='deleteIcon' />
                  ) : (
                    <BsFillEyeFill className='deleteIcon' />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mobilePreviewContainer'>
          <MobilePreview todoItemsList={mylist} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
