import React from 'react'
import "./possibility.css"

import  possibilityImage  from '../../assets/Possibility.mp4';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id='possibility'>
        <div className="gpt3__possibility-image">
        
           <video
           src={possibilityImage}
           autoPlay
           loop
           muted
           className="possibility-video"

          alt="possibility" />
        </div>
        <div className="gpt3__possibility-container">
          <p><a href="/">Request Early Access to Get Started</a></p>
          <h1>The possibilities are beyond your imagination.</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>
    </div>
  )
}

export default Possibility