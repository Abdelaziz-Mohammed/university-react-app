import './VideoPlayer.css';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import video from '../../assets/college-video.mp4';

const VideoPlayer = ({setHideVideoPlayer}) => {
  const videoEle = useRef(null);
  const closeVideoPlayer = (e) => {
    if (e.target != videoEle.current) {
        setHideVideoPlayer(true);
    }
  }
  return (
    <div className='video-player' onClick={(e) => closeVideoPlayer(e)} >
        <video src={video} autoPlay muted controls loop ref={videoEle}></video>
    </div>
  )
}

VideoPlayer.propTypes = {
    setHideVideoPlayer: PropTypes.func.isRequired
}

export default VideoPlayer