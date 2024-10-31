import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <p>
          &copy; {new Date().getFullYear()} Edusity. All rights reserved.
          <br />
          Developed By Eng: <a href="https://www.linkedin.com/in/abdelaziz" target="_blank">Abdelaziz Mohamed</a>
        </p>
    </div>
  )
}

export default Footer