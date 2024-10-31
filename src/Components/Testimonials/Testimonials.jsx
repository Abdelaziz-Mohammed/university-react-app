import { useRef } from 'react';
import './Testimonials.css';
import back_icon from '../../assets/back-icon.png';
import next_icon from '../../assets/next-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const sliderList = useRef();
  let transValue = 0;
  const goBackward = () => {
    if(transValue != -75) transValue -= 25;
    sliderList.current.style.transform = `translateX(${transValue}%)`;
  }
  const goForward = () => {
    if(transValue != 0) transValue += 25;
    sliderList.current.style.transform = `translateX(${transValue}%)`;
  }
  return (
    <div className="testimonials">
        <button id="back_btn" onClick={goBackward}>
            <img src={back_icon} alt="..." />
        </button>
        <div className="slider">
            <ul ref={sliderList}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="..." />
                            <div>
                                <h3>Emily Williams</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Choosing to pursue my degree at Edusity was one of the best decisions 
                            I&apos;ve ever made. The supportive community, state-of-the-art facilities, 
                            and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="..." />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Choosing to pursue my degree at Edusity was one of the best decisions 
                            I&apos;ve ever made. The supportive community, state-of-the-art facilities, 
                            and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="..." />
                            <div>
                                <h3>Emily Williams</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Choosing to pursue my degree at Edusity was one of the best decisions 
                            I&apos;ve ever made. The supportive community, state-of-the-art facilities, 
                            and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="..." />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Choosing to pursue my degree at Edusity was one of the best decisions 
                            I&apos;ve ever made. The supportive community, state-of-the-art facilities, 
                            and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <button id="next_btn" onClick={goForward}>
            <img src={next_icon} alt="..." />
        </button>
    </div>
  )
}

export default Testimonials