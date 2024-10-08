import React from 'react'
import Showvideo from '../Navbar/Showvideo/Showvideo.js'
import vid from '../Navbar/Video/vid.mp4'
import { useSelector } from 'react-redux';
const Showideolist = ({videoid}) => {
  const vids=useSelector(state=>state.videoreducer)
  
  return (
    <div className='Container_ShowVideogrid'>
        {
            vids?.data.filter(q=>q._id === videoid).map(vi=> {
                return(
                    <div className='video_box_app' key={vi._id}>
                        <Showvideo vid={vi}/>
                    </div>
                )
            }) 
        }
    </div>
  )
}

export default Showideolist