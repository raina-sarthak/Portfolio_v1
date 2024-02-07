export default function Project(){
    return(
       <div className="flex flex-row mx-36 aspect-video justify-center ">
         <div class="carousel carousel-center  p-4 space-x-4 bg-neutral-700 rounded-box">
            <div class="carousel-item">
              <video autoPlay loop  src="/Prototype1.mov" type="video/mov"  alt="Dragon Selector" className="rounded-box"  />
            </div> 
            <div class="carousel-item">
              <video autoPlay loop  src="/Prototype2.mov" type="video/mov"  alt="Spotify Clone" className="rounded-box"  />
            </div> 
            <div class="carousel-item">
              <video autoPlay loop  src="/Prototype1.mov" type="video/mov"  alt="Dragon Selector" className="rounded-box"  />
            </div> 
            <div class="carousel-item">
              <video autoPlay loop  src="/Prototype2.mov" type="video/mov"  alt="Spotify Clone" className="rounded-box"  />
            </div> 
            <div class="carousel-item">
              <video autoPlay loop  src="/Prototype1.mov" type="video/mov"  alt="Dragon Selector" className="rounded-box"  />
            </div> 
            <div class="carousel-item">
              <video autoPlay loop  src="/Prototype2.mov" type="video/mov"  alt="Spotify Clone" className="rounded-box"  />
            </div> 
       </div>
      </div>
    )
}