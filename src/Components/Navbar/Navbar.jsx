import "./Navbar.css";
import {useEffect} from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        document.querySelector('.navbar').classList.add('active');
      }
      else {
        document.querySelector('.navbar').classList.remove('active');
      }
    })
    // to apply dark navbar onload and before any scroll if the scrollY > 60
    if (window.scrollY > 60) document.querySelector('.navbar').classList.add('active');
  }, [])
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} alt="..." className="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="hero" smooth={true} offset={0} duration={0} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="programs" smooth={true} offset={-220} duration={0} className="nav-link">Program</Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} offset={-80} duration={0} className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="campus" smooth={true} offset={-220} duration={0} className="nav-link">Campus</Link>
            </li>
            <li className="nav-item">
              <Link to="testimonials" smooth={true} offset={-220} duration={0} className="nav-link">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} offset={-220} duration={0} className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar