import "./Hero.css"
import arrow_icon from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, 
          and experiences needed to excel in the dynamic field of education
        </p>
        <button className="custom-btn">Explore More<img src={arrow_icon} alt="..." /></button>
      </div>
    </div>
  )
}

export default Hero