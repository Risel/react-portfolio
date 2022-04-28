import React, {useState} from 'react';
import {images} from '../../constants';
import './Navbar.scss';
import {IoMenu,IoClose} from 'react-icons/io5'
import {motion} from 'framer-motion';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className="app__navbar">
        <div className = "app__navbar-logo">
          <img src={images.logo} alt="Logo"/>
        </div>
        <ul className="app__navbar-links">
          {['home','about','work','skills','contact'].map((item)=> (
            <li className = "app__flex p-text" key = {`link-${item}`}>
              <div/>
              <a href={`#${item}`}>{item}</a>
            </li>
            ))}
        </ul>
        <div className="app__navbar-menu">
          <IoMenu onClick = {()=>setToggle(true)}/>

          {toggle && (
              <motion.div
                whileInView = {{ x: [300,0]}}
                transition = {{duration:0.25, ease:'easeOut'}}
              >
                <IoClose onClick={()=> setToggle(false)}/>
                <ul>
                {['home','about','works','skills','contact'].map((item)=> (
                  <li key = {item}>
                    <a href={`#${item}`} onClick={()=> setToggle(true)}>{item}</a>
                  </li>
                ))}
                </ul>
                </motion.div>
            )}
          </div>
        </nav>
      </div>
    );
  };

  export default Navbar;
