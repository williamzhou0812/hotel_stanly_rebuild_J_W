import React from 'react';
import ReactPlayer from 'react-player';
import { videoList } from './VideoData';
import { randomiseItems } from "../../../Constants";

class Videos extends React.Component {
    constructor(props) {
        super(props);
        // prepare video list
        const video_urls = videoList.map(item => item.video);
        const shuffled = randomiseItems(video_urls);
        this.state = {
            videos: shuffled,
            playndex: 0,
            playloop: (shuffled.length > 1) ? false : true,
            playing: true
        };
        this.handleEnded = this.handleEnded.bind(this);
    }

    handleEnded = () => {
        const { playndex, videos } = this.state;
        if (videos.length > 1) {
            // change to next video
            if (playndex === videos.length - 1) {
                this.setState({
                    playndex: 0,
                    playing: true
                })
            }
            else {
                this.setState({
                    playndex: playndex + 1,
                    playing: true
                })
            }
        }
    }

    render() {
        const { playndex, videos, playloop, playing } = this.state;
        return (
        
    
            <div style={{background: 'back', width: '100%', height: '100%'}} > 
               
              {/*  <video src={temp_video_data[_id].video} autoPlay  type="video/mp4"  /> 
             */}
               <ReactPlayer
                    url={videos[playndex]}
                    playing={playing}
                    loop={playloop}
                    onEnded={this.handleEnded}
                    width='100%'
                    height='auto'
                />
    
            
            </div>
          
        )
    }
}

export default Videos;