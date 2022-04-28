import React from 'react';
import {SiTelegram, SiInstagram, SiVk} from 'react-icons/si'

const SocialMedia = () => {
  return (
    <div className = "app__social">
      <div>
        <SiTelegram/>
      </div>
      <div>
        <SiInstagram/>
      </div>
      <div>
        <SiVk/>
      </div>
      
    </div>
  );
};

export default SocialMedia;
