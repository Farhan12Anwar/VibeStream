import React from 'react'
import WHL from '../../Component/WHL/WHL.js';
import { useSelector } from 'react-redux';

const Likevideo = () => {
  const likedvideolist=useSelector((state)=>state.likedvideoreducer)
  return (
    <WHL page={'Liked Video'} videolist={likedvideolist} />
)
}

export default Likevideo