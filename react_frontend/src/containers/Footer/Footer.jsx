import React, {useState} from 'react';
import ReactTooltip from 'react-tooltip';


import {images} from '../../constants'
import {AppWrap, MotionWrap} from "../../wrapper";
import {client} from "../../client";

import './Footer.scss'

const Footer = () => {

  const [formData, setFormData] = useState({name:'',email:'',message:''});
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name,email,message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(()=> {
        setLoading(false);
        setIsFormSubmited(true);
      })

  }

  return (
    <>
    <h2 className="head-text">You can leave me a message</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email"/>
          <a href="mailto:roman.ignatowi413@gmail.com">
            contact@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile"/>
          <a href="tel: +7(950)036-26-86">+7(950)-036-26-86</a>
        </div>
      </div>

      {!isFormSubmited ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" value={name} name="name"
                   onChange={handleChangeInput}/>
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" value={email} name="email"
                   onChange={handleChangeInput}/>
          </div>
          <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
          </div>
          <button type='button' className="p-text"
                  onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
      ): (<div>
          <h3 className="head-text">Thanks for your message!</h3>
        </div>
        )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), 'contact','app__whitebg');
