import React from 'react';
import './VideoFooter.css';
import {Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
//import Ticker from 'react-ticker';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function VideoFooter({channel, song, likes, shares, avatarSrc}) {
  return (
    <div className='videoFooter'>
         <div className='videoFooter_text'>
        <Avatar src={avatarSrc}/>
        <h3>
            {channel} • <Button>Follow</Button>
        </h3>
        </div>
        <div className='videofooter_ticker'>
          <MusicNoteIcon 
          className='videoFooter_icon'/>
        {/* <Ticker mode="smooth">
          {({index}) => (
            <>
            <h1>{song}</h1>
            </>

          )}
        </Ticker> */}
        </div>
        <div className='videoFooter_actions'>
          <div className='videoFooter_actionsLeft'>
              <FavoriteIcon fontSize="large"/>
              <ModeCommentIcon fontSize="large"/>
              <SendIcon fontSize="large"/>
              <MoreHorizIcon fontSize="large"/>
          </div>
          <div className='videoFooter_actionsRight'>
            <div className='videoFooter_stat'>
              <FavoriteIcon/>
              <p>{likes}</p>
            </div>
            <div className='videoFooter_stat'>
              <ModeCommentIcon/>
              <p>{shares}</p>
            </div>

          </div>

        </div>
    </div>
  )
}

export default VideoFooter;