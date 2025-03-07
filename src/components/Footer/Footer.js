import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <h3>&copy; 2024  All rights reserved </h3>

        <div className="personal-container">
          <h3 className="personal-info">
            Web Development by KrishnaChaitanya Kolluri
            <div className="personal-links">
              <a
                href="https://github.com/krishkolluri"
                className="social-link"
              >
                <span>GitHub</span>
              </a>
              
            </div>
          </h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
