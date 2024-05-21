import { faGithub, faStaylinked } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./testimonial.css";
import "../Contact/style.css";
import axios from "axios";

const url = "http://localhost:9000/api/contacts";
const Testimonials = () => {
  const [email, setEmail] = useState("");

  const handEmailSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, { email })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='media col-1-2'>
            <div className='media-item'>
              <FontAwesomeIcon icon={faStaylinked} rotation={90} size='7x' />
            </div>
            <div className='media-body'>
              <h4 className='media-heading'>Vite</h4>
              <p>
                Get ready for a development environment that can finally catch
                up with you.
              </p>
              <button className='btn'>
                <Link to='https://vitejs.dev/'>Learn</Link>
              </button>
            </div>
          </div>
          <div className='media col-1-2'>
            <div className='media-item'>
              <FontAwesomeIcon icon={faGithub} size='7x' />
            </div>
            <div className='media-body'>
              <h4 className='media-heading'>Github</h4>
              <p>Am working hard to getting better and better each day.</p>
              <button className='btn'>
                <Link to='https://github.com/Tochiskool/njanghi'>Learn</Link>
              </button>
            </div>
          </div>
        </div>
        <div className='container' style={{ display: "none" }}>
          <div className='row'>
            <div className='formContainer parent'>
              <h3>Join my email listing</h3>
              <div>
                <form onSubmit={handEmailSubmit}>
                  <fieldset>
                    <legend>Join now</legend>
                    <div>
                      <div className='field'>
                        <label className='label'>Name</label>
                        <div className='control'>
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            name='name'
                            className='input'
                            type='email'
                            placeholder='Enter name...'
                          />
                        </div>
                      </div>
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
