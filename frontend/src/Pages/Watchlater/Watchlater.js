import React from 'react'
import WHL from '../../Component/WHL/WHL.js';
import { useSelector } from 'react-redux';

const Watchlater = () => {
  const watchlatervideolist=useSelector((s)=>s.watchlaterreducer)
  return (
    <WHL page={"Watch Later"} videolist={watchlatervideolist}/>
  )
}

export default Watchlater