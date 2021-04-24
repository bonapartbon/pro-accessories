import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="my-container head">
          <nav className="navbar navbar-expand-md navbar-light container ">
            <div className="logo-text col-4">
              <Link to="/"><div className="navbar-brand text-logo" style={{ fontSize: "30px" }} >Pro Accessories</div></Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                <a href="tel:+855 96 393 3332" >Call Us</a>
                </li>
              </ul>
            </div>

            <div className="col-4 text-right call">
              <h5 ><a href="tel:+855 96 393 3332" className="phone"><b> Call Us: 096 39 3332</b></a></h5>
            </div>



          </nav>
        </div>

        <div className="big-container">

          {/* categories */}
          <div className="container-fluid wide-cate">
            <div className="container">
              <ul className="categories">
                <li className="catego"><a href="#"><i className="fas fa-bars mr-2"></i> CATEGORIES </a>
                  <ul className="sub-cate">
                    <li><a href="#">GAMING MOUSE<i className="fas fa-chevron-right pt-1 float-right"></i></a>
                      <ul className="sub-sub-cate">
                        <li><Link to="/mouse/logitech">LOGITECH</Link></li>
                        <li><Link to="/mouse/steelseries">STEELSERIES</Link></li>
                        <li><Link to="/mouse/zowie">ZOWIE</Link></li>
                      </ul>
                    </li>
                    <li><a href="#">GAMING KEYBOARD<i className="fas fa-chevron-right pt-1 float-right"></i></a>
                      <ul className="sub-sub-cate">
                        <li><Link to="/keyboard/keychron">KEYCHRON</Link></li>
                        <li><Link to="/keyboard/ducky">DUCKY</Link></li>
                        <li><Link to="/keyboard/varmilo">VARMILO</Link></li>
                        <li><Link to="/keyboard/leopold">LEOPOLD</Link></li>
                        <li><Link to="/keyboard/mistel">MISTEL</Link></li>
                        <li><Link to="/keyboard/akko">AKKO</Link></li>
                        <li><Link to="/keyboard/logitech">LOGITECH</Link></li>
                        <li><Link to="/keyboard/hyperx">HYPER-X</Link></li>
                      </ul>
                    </li>
                    <li><a href="#">GAMING HEADSET<i className="fas fa-chevron-right pt-1 float-right"></i></a>
                      <ul className="sub-sub-cate">
                        <li><Link to="/headset/logitech">LOGITECH</Link></li>
                        <li><Link to="/headset/hyperx">HYPER-X</Link></li>
                      </ul>
                    </li>
                    <li><a href="#">GAMING MOUSEPAD<i className="fas fa-chevron-right pt-1 float-right"></i></a>
                      <ul className="sub-sub-cate">
                        <li><Link to="/mousepad/steelseries">STEELSERIES</Link></li>
                        <li><Link to="/mousepad/zowie">ZOWIE</Link></li>
                        <li><Link to="/mousepad/hyperx">HYPER-X</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav1"><Link to="/">HOME</Link></li>
                <li className="nav3"><Link to="/about">ABOUT</Link></li>
                
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Header;