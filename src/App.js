
//import React, {useState, useEffect} from "react";
import './App.css';
import VideoCard from './VideoCard';
//import db from "./firebase";
function App() {
  // const [reels, setReels] = useState([])

  // useEffect(() => {
  //   db.collection('reels').onSnapshot(snapshot =>(
  //     setReels(snapshot.docs.map(doc => doc.data()))
  //   ))
  // }, [])
  return (
    <div className="app">

        <div className="app_top">
            { /* image */}
            <img className="app_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png" 
            alt="" 
            />
            { /* Text - Reels */}
            <h1>Reels</h1>
        </div>
        <div className="app_videos">
          <VideoCard
          channel={'cleverqazi'}
          avatarSrc={'https://www.filepicker.io/api/file/q8yh1SmySmy5BNapeDem'}
          song={'test song - sssangha'}
          url={'https://video-links.b-cdn.net/media/videolinks/video/one_rs.mp4'}
          likes={950}
          shares={300}
          />
          <VideoCard/>
          <VideoCard/> 
          {/* {reels.map(({channel,avatarSrc,song,url,likes,shares}) => (

            <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
            />
            ))}    */}
        </div>

    </div>
  );
}

export default App;
