import MobileDevicePreview from 'sanity-mobile-preview';
import 'sanity-mobile-preview/dist/index.css';
import '../../style/mobilePreview.css';
import Navbar from '../navbar/navbar';
import {
  actionCardImg,
  checkMarkCircular,
  nodatafound,
} from '../../constants/images';
import BottomNavBar from '../bottomNavBar/bottomNavigationBar';

const MobilePreview = ({ todoItemsList }) => {
  return (
    <div>
      {todoItemsList.length === 0 ? (
        // If list is empty show empty image
        <div className='emptyImage'>
          <img src={nodatafound} alt='check mark' />
          No Data Found
        </div>
      ) : (
        // else display the preview and list items
        <>
          <MobileDevicePreview
            preSelectedDevice={'iphone5s'}
            preSelectedColor={'black'}
            preSelectedLandscape={false}
            showMenu={false}
          >
            <div className='scrollableList'>
              <Navbar />

              <div className='itemMargin'>
                {todoItemsList.map((item, index) => (
                  <div key={index}>
                    {item.hide === true ? (
                      <div></div>
                    ) : (
                      <>
                        {item.name === 'Todo' ? (
                          <div className='todoCard'>
                            <img
                              src={checkMarkCircular}
                              height={32}
                              width={32}
                              alt='check mark'
                            />
                            <div className='todoText'>New Todo Item</div>
                          </div>
                        ) : (
                          <div className='actionCard'>
                            <div class='img-wrapper'>
                              <img
                                class='img-responsive'
                                src={actionCardImg}
                                alt='action Card'
                              />
                              <div class='img-overlay'>
                                <a
                                  href='https://google.com'
                                  target='_blank'
                                  rel='noreferrer'
                                >
                                  <button
                                    class='btn btn-md btn-success '
                                    className='button'
                                  >
                                    Learn More
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
              <BottomNavBar />
            </div>
          </MobileDevicePreview>
        </>
      )}
    </div>
  );
};

export default MobilePreview;
