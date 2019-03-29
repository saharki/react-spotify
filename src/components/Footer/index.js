import React from 'react';
import PropTypes from 'prop-types';
import SongControls from '../SongControls';
import VolumeControls from '../VolumeControls';
import './Footer.css';

const Footer = ({ stopSong, pauseSong, resumeSong, audioControl, onClick }) => {
  return (
    <div
      className='footer'
      onClick={onClick}
    >
      <SongControls
        stopSong={stopSong}
        pauseSong={pauseSong}
        resumeSong={resumeSong}
        audioControl={audioControl}
      />
      <VolumeControls />
    </div>
  );
};

Footer.propTypes = {
  stopSong: PropTypes.func,
  pauseSong: PropTypes.func,
  resumeSong: PropTypes.func,
  audioControl: PropTypes.func
};

export default Footer;
