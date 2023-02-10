import React from "react";
import "./index.css";
import earthvideo from "../../assets/vid/earth-video.mp4";
import { useEffect } from "react";

let count =0;

const Component3 = () => {


  useEffect(()=>
  {
    document.addEventListener("scroll",()=>{
      const vid = document.getElementById("back-vid")
      const anim = document.getElementById("anim-span")
      const client_height= document.documentElement.clientHeight
          const memorySectionY = vid.getBoundingClientRect().y;
          if(client_height>memorySectionY)
          {
            let vid = document.getElementById("back-vid")
            anim.style.animation="reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s";
            if(count<1)
            {
              vid.play();
            }
          }
          else
          {
            vid.pause()
          }
    })
  },[])

  useEffect(()=>
  {
    const vid = document.getElementById("back-vid")
    vid.addEventListener("ended", e => count++);
  },[])

  return (
    <div class="intro">
      <h1>
        <span id='anim-span'>We &#128151; Nature</span>
      </h1>
      <video muted playsInline="true" preload="true" src={earthvideo} id="back-vid"/>
    </div>
  );
};

export default Component3;
