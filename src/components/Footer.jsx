import React from 'react'
import '../styles/footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="copyright">
                <p> Design and Developed by &copy; Gulabchand Gupta  </p>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/gulabchand-kumar-gupta-5055601b7/" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin-in icon"></i></a>
                <a href="https://github.com/gulabchan" target="_blank" rel='noreferrer'>  <i className="fa-brands fa-github icon git"></i></a>
                <a href="https://twitter.com/home" target="_blank" rel='noreferrer'><i className="fa-brands fa-twitter icon"></i></a>
                <a href="https://www.instagram.com/gulabchand_gupta234/" target="_blank" rel='noreferrer'> <i className="fa-brands fa-instagram icon"></i></a>
            </div>
        </footer>
    )
}

export default Footer