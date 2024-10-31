import "./About.css";
import PropTypes from 'prop-types';
import about_image from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';


const About = ({setHideVideoPlayer}) => {
  return (
    <div className="about">
        <div className="about-left">
          <img src={about_image} alt="..." className="poster" />
          <img src={play_icon} alt="..." className="play-icon" onClick={() => setHideVideoPlayer(false)} />
        </div>
        <div className="about-right">
          <div className="about-title">
              <p>ABOUT UNIVERSITY</p>
              <h2>Nurturing Tomorrow&apos;s Leaders Today</h2>
          </div>
          <div className="text">
            <p>
              Embark on a transformative educational journey with our university&apos;s 
              comprehensive education programs. Our cutting-edge curriculum is designed 
              to empower students with the knowledge, skills, and experiences needed to 
              excel in the dynamic field of education.
            </p>
            <p>
              With a focus on innovation, hands-on learning, and personalized mentorship, 
              our programs prepare aspiring educators to make a meaningful impact in 
              classrooms, schools, and communities.
            </p>
            <p>
              Whether you aspire to become a teacher, administrator, counselor, or 
              educational leader, our diverse range of programs offers the perfect 
              pathway to achieve your goals and unlock your full potential in shaping 
              the future of education.
            </p>
          </div>
        </div>
    </div>
  )
}

About.propTypes = {
  setHideVideoPlayer: PropTypes.func.isRequired
}

export default About