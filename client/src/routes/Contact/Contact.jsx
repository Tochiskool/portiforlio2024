import React, { useState, useEffect } from "react";
import Hero from "../Hero/Hero";
import "./style.css";
import Footer from "../Footer";
import API from "../../utils/API";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const url = "http://localhost:9000/api/contacts";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [label, setLabel] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [background, setBackround] = useState("");

  const navigate = useNavigate();

  //Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        name,
        email,
        label,
        message,
      })
      .then((results) => {
        updateFields();
        setTimeout(() => {
          navigate("/portfolio");
        }, 3000);
        console.log(results);
      })

      .catch((err) => console.log(err));
  };

  const updateFields = () => {
    if (name === "" || email === "" || label === "" || message === " ") {
      setResponse("Please fill the form correctly");
    } else {
      setResponse(
        `Thanks for reaching out ${name}. Will get back to you asap at this email ${email}`
      );
    }
    setName("");
    setEmail("");
    setLabel("");
    setMessage("");
    setBackround("#16c48a");
  };

  // useEffect(() => {
  //   loadContacts();
  // }, []);

  // function loadContacts() {
  //   API.fetchContacts()
  //     .then((contacts) => {
  //       return setContacts(contacts);
  //     })
  //     .catch((err) => console.log(err));
  // }
  return (
    <>
      <Hero />
      <div className='container ' style={{ marginTop: "2rem" }}>
        <div className='row remove-gutter-xs'>
          <div className='formContainer'>
            <h3
              style={{
                fontSize: "30px",
                backgroundColor: background,
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <strong>
                <em>{response}</em>
              </strong>
            </h3>
            <form onSubmit={handleSubmit}>
              <h2>CONTACT FORM </h2>
              {/* disabled='disabled' */}
              <fieldset>
                <legend>Send a message</legend>
                <div>
                  <div className='field'>
                    <label className='label'>Name</label>
                    <div className='control'>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        name='name'
                        className='input'
                        type='text'
                        required
                        placeholder='Enter name...'
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>Email</label>
                    <div className='control'>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        name='email'
                        className='input'
                        type='email'
                        required
                        placeholder='Enter Email..'
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>Label</label>
                    <div className='control'>
                      <input
                        onChange={(e) => setLabel(e.target.value)}
                        value={label}
                        name='label'
                        className='input'
                        type='text'
                        required
                        placeholder='Intro.. please'
                      />
                    </div>
                  </div>
                  {/* <div className='field'>
                    <label className='label'>Label</label>
                    <div className='control'>
                      <div className='select'>
                        <select>
                          <option>Select dropdown</option>
                          <option>HR</option>
                          <option>CEO</option>
                          <option>Friend</option>
                        </select>
                      </div>
                    </div>
                  </div> */}
                  <div className='field'>
                    <label className='label'>Message</label>
                    <div className='control'>
                      <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        name='message'
                        className='textarea'
                        required
                        placeholder='Textarea'
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
                  type='text'
                  style={{
                    display: "block",
                    width: "50%",
                    margin: "0 auto",
                    marginTop: "0.5rem",
                  }}
                  className=' button is-primary is-dark'
                >
                  Send
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
