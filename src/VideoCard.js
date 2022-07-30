import React, {useState, useRef } from 'react';
import VideoHeader from './VideoHeader';
import './VideoCard.css';
import VideoFooter from './VideoFooter';
import './VideoFooter.css';

function VideoCard({url, likes, shares, channel, avatarSrc, song}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
      if(isVideoPlaying) {
        //stop
        videoRef.current.pause();
        setIsVideoPlaying(false)
      }
      else{
        //play
        videoRef.current.play();
        setIsVideoPlaying(true)
      }
    }

  return (
    <div className='videoCard'>
        <VideoHeader/>
        <video 
             ref={videoRef}
             onClick={onVideoPress}

            className='video_player'
            src={url}
            alt='IG reel video'  
            loop      
        />
        
        <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}        
        />
    </div> 
  )
}

export default VideoCard;