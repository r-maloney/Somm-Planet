import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ isLoaded }) => {
  return (
    <div className='footer'>
      <div className='page-width'>
        {isLoaded && (
          <>
            <div className='footer__section'>
              <ul>
                <li className='footer__link'>
                  <a href='https://github.com/r-maloney'>Author's Github</a>
                </li>
                <li className='footer__link'>
                  <a href='https://www.linkedin.com/in/r-maloney/'>
                    Author's LinkedIn
                  </a>
                </li>
                <li className='footer__link'>
                  <a href='https://github.com/r-maloney/Somm-Planet'>
                    Project Github
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Footer;
