import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class About extends React.Component {
    render() {
        return (
            <div className="container ">
                <h2 className="mt-2"><b>About Us</b></h2>
                <h5 style={{ textIndent: "30px" }}>
                    Surely, you need a good computer or a gaming console with great graphics card, lots of RAM, fast processor, a speedy hard disk to run and play demanding games. And surely you probably already have one of these gaming machines. But gaming is all about fun and when it comes to fun, you need to add some gaming accessories.
                </h5>
                <h5 style={{ textIndent: "30px" }}>
                    Our gaming website obviously care about the gaming experience. It’s in the name, after all. Which is why we want to make sure to steer you towards the best gaming accessories on the market.
                </h5>
                <h5 style={{ textIndent: "30px" }}>
                    So, if you’re in the market to find your gaming accessories, be sure to check out Pro Accessories.
                </h5>
                <h4 className="mt-3"><b>You can find us through:</b></h4>
                <h5 className="mt-2"><a href="https://www.facebook.com/ProAccessoriesKH" target="https://www.facebook.com/ProAccessoriesKH"><i className="fab fa-facebook-square fa-lg pr-2"></i>ProAccessoriesKH</a></h5>
                <h5 className="mt-2"><a href="tel:+855 96 393 3332"><i className="fas fa-phone-square-alt fa-lg pr-2"></i>+855 96 393 3332</a></h5>
            </div>
        );
    }
}

export default About;