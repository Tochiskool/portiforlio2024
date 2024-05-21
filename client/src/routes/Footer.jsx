import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer style={{ marginTop: "2rem" }}>
      {/* <section>
        <div className='container'>
          <div className='row'>
            <div className='col-1-4 remove-gutter-xs'>
              <div className='background-secondary'>Feature Content</div>
            </div>
            <div className='col-1-4 remove-gutter-xs'>
              <div className='background-secondary'>Feature</div>
            </div>
            <div className='col-1-4 remove-gutter-xs'>
              <div className='background-secondary'>Feature Content</div>
            </div>
            <div className='col-1-4 remove-gutter-xs'>
              <div className='background-secondary'>Feature Content</div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-1-4 centerSmall'>
              <span className='icon-text'>
                <span className='icon'>
                  <Link to='https://twitter.com/Tochiskool'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </span>
                <span>Twitter</span>
              </span>
            </div>
            <div className='col-1-4 centerSmall '>
              <span className='icon-text'>
                <span className='icon'>
                  <Link to='https://twitter.com/Tochiskool'>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                </span>
                <span>..</span>
              </span>
            </div>
            <div className='col-1-4 centerSmall '>
              <span className='icon-text'>
                <span className='icon'>
                  <Link to='https://www.linkedin.com/in/christian-n-awemu-6553491b9/'>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </span>
                <span>LinkedIn</span>
              </span>
            </div>
            <div className='col-1-4 centerSmall'>
              <span className='icon-text '>
                <span className='icon'>
                  <Link to='https://github.com/Tochiskool'>
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </span>
                <span>Github</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
