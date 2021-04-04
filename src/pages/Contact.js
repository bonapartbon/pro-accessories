import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
const Contact =()=>{
    return(
    
  <div className="container ">

      <div className="d-flex bd-highlight mt-3">

      <div className="row pt-2 p-7 w-100 bd-highlight"  >
      <div className="col-9 divider">
      <h2><b> Contact Us</b></h2>
        <label className="form-label font-weight-bolder text-primary h5">Full-Name </label>
        <input type="email" className="form-control" placeholder=" Write your your name "></input>
        <label className="form-label font-weight-normal font-weight-bolder text-primary h5 mt-2">Email </label>
        <input type="email" className="form-control" placeholder="name@example.com"></input>
        <label className="form-label font-weight-normal font-weight-bolder text-primary h5 mt-2">Comment</label>
         <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" ></textarea>
         <button className="btn btn-danger mt-3 mb-2 h4" type="submit">Submit</button>
         </div>
  </div>
<div className="p-2 flex-shrink-1 bd-highlight f">
        <p className="h2 text-danger "><strong> Our Office</strong></p>
        <p className=" h5 font-weight-normal " >  Address: No. 8, St. 315,Boeng Kak 1, Tuol Kork,Phnom Penh, Cambodia</p>
        <p className="h5 font-weight-normal">Phone Number: 096 393 3332</p> 
        <p className="h5 font-weight-normal">Email: contact@proaccesories.com</p> 

<p className="h5 font-weight-normal">Facebook: <a href="https://www.facebook.com/ProAccessoriesKH" target="https://www.facebook.com/ProAccessoriesKH"> https://www.facebook.com/ProAccessoriesKH</a></p> 
<br></br>
<p className="h2 text-danger "><strong> Business Hour</strong></p>
<p className="h5 font-weight-normal">Monday - Sunday 8:30am to 7:00pm</p> 


</div>
</div>
</div>
    );
}
export default Contact;