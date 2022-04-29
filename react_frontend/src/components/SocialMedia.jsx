import React from 'react';
import {SiTelegram, SiInstagram, SiVk} from 'react-icons/si'

const SocialMedia = () => {
  return (
    <div className = "app__social">
      <div>
        <a href="https://t.me/emptyfielddd" target="_blank"><SiTelegram/></a>
      </div>
      <div>
        <a href="https://instagram.com/emptyfielddd?igshid=YmMyMTA2M2Y=" target="_blank"><SiInstagram/></a>
      </div>
      <div>
        <a href="https://vk.com/r1sel" target="_blank"><SiVk/></a>
      </div>
    </div>
  );
};

export default SocialMedia;
