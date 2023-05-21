import React from "react";
import logo5 from './images/logo5.png';
import logo6 from './images/logo6.png'
import logo4 from './images/logo4.png'
import logo3 from './images/logo3.png'

const Gallery = () => {
    return (
       <div class="row">
          <div class="col-3">
           <img class="gallery-icons" src={logo5} alt="" />
           <h2>Declarative</h2>
           <p class="px-5 text-muted">React makes it painless to create interactive UIs</p>
          </div>
          <div class="col-3">
           <img class="gallery-icons" src={logo6} alt="" />
           <h2>Components</h2>
           <p class="px-5 text-muted">Build encapsulated components that manage their state.</p>
          </div>
          <div class="col-3">
           <img class="gallery-icons" src={logo4} alt="" />
           <h2>Single-Way</h2>
           <p class="px-5 text-muted">A set of immutable values are passed to the component's.</p>
          </div>
          <div class="col-3">
           <img class="gallery-icons" src={logo3} alt="" />
           <h2>JSX</h2>
           <p class="px-5 text-muted">Statically-typed, designed to run on modern browsers.</p>
          </div>
       </div>
    );
}

export default Gallery;