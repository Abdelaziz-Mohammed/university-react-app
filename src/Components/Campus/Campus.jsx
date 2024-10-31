import './Campus.css';
import gallary_img_1 from '../../assets/gallery-1.png';
import gallary_img_2 from '../../assets/gallery-2.png';
import gallary_img_3 from '../../assets/gallery-3.png';
import gallary_img_4 from '../../assets/gallery-4.png';
import arrow_icon from '../../assets/white-arrow.png';

const Campus = () => {
  return (
    <div className="campus">
        <div className="gallery">
            <img src={gallary_img_1} alt="..." />
            <img src={gallary_img_2} alt="..." />
            <img src={gallary_img_3} alt="..." />
            <img src={gallary_img_4} alt="..." />
        </div>
        <button className="custom-btn">See More Here<img src={arrow_icon} alt="..." /></button>
    </div>
  )
}

export default Campus