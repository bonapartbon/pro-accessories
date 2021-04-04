import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Logitech from "../json-items/logitech"
import HyperX from "../json-items/hyper-x"
import Steelseries from "../json-items/steelseries"
import Akko from "../json-items/akko"
import Keychron from "../json-items/keychron"
import Zowie from "../json-items/zowie"
import Ducky from "../json-items/ducky"
import Varmilo from "../json-items/varmilo"
import Leopold from "../json-items/leopold"
import Mistel from "../json-items/mistel"

class Body extends React.Component {
  render() {
    return (

      <div>

        {/* <!-- carousel --> */}
        <div id="carouselExampleFade" className=" mt-3 carousel slide carousel-fade col-10 " data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assets/img/corusel-1.png" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>


        <Logitech />
        <HyperX />
        <Steelseries />
        <Akko />
        <Keychron />
        <Zowie />
        <Ducky />
        <Varmilo />
        <Leopold />
        <Mistel />





      </div>


    );
  }
}

export default Body;