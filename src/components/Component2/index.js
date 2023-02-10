import React from "react";
import { useEffect } from "react";
import "./index.css";
const Component2 = () => {

  useEffect(()=>
  {
    document.addEventListener("scroll",()=>{
      const elem = document.getElementsByClassName("under-div")
      const client_height= document.documentElement.clientHeight
          const memorySectionY = elem[0].getBoundingClientRect().y;
          const memorySectionY2 = elem[1].getBoundingClientRect().y;
          if(client_height>memorySectionY)
          {
            elem[0].style.width="100%";
          }
          if(client_height>memorySectionY2)
          {
            elem[1].style.width="100%";
          }
    })
  },[])

  return (
    <div id="main-div2">
      <section>
        <div class="left">
          <div class="inner sticky">
            <div
              class="bg"

              id="back1"
            ></div>
          </div>
        </div>
        <div class="right">
          <div class="inner">
            <h2 class="text-center" >ECO <div className="spn">Friendly
            <div className="under-div"></div>
            </div> Products</h2>
			<br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nam
              reiciendis unde magni eligendi excepturi maxime nulla adipisci,
              veniam officiis, explicabo commodi laboriosam blanditiis
              repellendus quidem debitis ab! Aliquid, facere. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Ipsa nam reiciendis unde
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="left">
          <div class="inner sticky">
            <div class="bg" id="back2"></div>
          </div>
        </div>
        <div class="right">
          <div class="inner">
            <h2 class="text-center">SAVING <div className="spn">MOTHER
            <div className="under-div"></div>
            </div> EARTH</h2>
			<br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nam
              reiciendis unde magni eligendi excepturi maxime nulla adipisci,
              veniam officiis, explicabo commodi laboriosam blanditiis
              repellendus quidem debitis ab! Aliquid, facere. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Component2;
