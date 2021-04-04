import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
const Contact =()=>{
    return(
      
    //        <div className="mb-3">
    // <label for="exampleFormControlInput1" class="form-label">Full-Name </label>
    // <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    //      </div>
  <div className="container ">
      <br></br>
        <br></br>
        <br></br>
      <div class="d-flex bd-highlight mt-3">

      <div className="row pt-2 p-7 w-100 bd-highlight"  >
      <div className="col-9 divider">
      <h2><b> Contact Us</b></h2>
        <label for="exampleFormControlInput1" className="form-label font-weight-bolder text-primary h5">Full-Name </label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=" Write your your name "></input>
        <label for="exampleFormControlInput1" class="form-label font-weight-normal font-weight-bolder text-primary h5">Email </label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        <label for="exampleFormControlTextarea1" class="form-label font-weight-normal font-weight-bolder text-primary h5">Comment</label>
         <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" ></textarea>
         <button className="btn btn-danger mt-3 mb-2 h4" type="submit">Submit</button>
         </div>
  </div>
<div className="p-2 flex-shrink-1 bd-highlight f">
        <p className="h2 text-danger "><strong> Our Office</strong></p>
        <p className=" h5 font-weight-normal " >  Address: No. 8, St. 315,Boeng Kak 1, Tuol Kork,Phnom Penh, Cambodia</p>
        <p className="h5 font-weight-normal">Phone Number: 093362890</p> 
        <p className="h5 font-weight-normal">Email: ProAccessor</p> 

<p className="h5 font-weight-normal">Facebook: https://www.facebook.com/ProAccessor/</p> 
<br></br>
<p className="h2 text-danger "><strong> Business Hour</strong></p>
<p className="h5 font-weight-normal">Monday - Sunday 8:30am to 7:00pm</p> 


</div>
</div>
</div>
    );
}
export default Contact;