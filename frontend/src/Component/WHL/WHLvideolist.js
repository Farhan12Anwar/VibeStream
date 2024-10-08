import React from 'react'
import Showideolist from '../Showideolist/Showideolist.js'

const WHLvideolist = ({page,videolist,currentuser}) => {
  return (
  <>
    {currentuser?(
      <>
        {
          videolist?.data.filter(q=>q?.viewer === currentuser).reverse().map(m=>{
            return(
              <>
                <Showideolist videoid={m?.videoid} key={m?._id}/>
              </>
            )
          })
        }
      </>
    ):(
      <>
        <h2 style={{color:'white'}}>Please login to watch your {page}</h2>
      </>
    )}
  </>
  )
}

export default WHLvideolist