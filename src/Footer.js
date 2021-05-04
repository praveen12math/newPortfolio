import React from 'react';

const Footer = () => {
    return ( 
        <footer className="bg-dark text-center text-white">
  
  <div className="container p-4 pb-0">
    
    <section className=" mt-5 mb-4">
      
      <a className="btn btn-outline-light btn-floating m-2" href="https://www.facebook.com/praveen12math/" role="button"
      target="_blank" without rel="noreferrer"
      >
      <i className="fab fa-facebook-f"></i></a>

      {/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
        <i className="fab fa-twitter"></i></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i></a> */}

      <a className="btn btn-outline-light btn-floating m-2" href="https://www.instagram.com/includepraveen/" role="button"
        target="_blank" without rel="noreferrer"
        ><i className="fab fa-instagram"></i></a>

      <a className="btn btn-outline-light btn-floating m-2" href="https://www.linkedin.com/in/praveen-yadav-926047159/" role="button"
      target="_blank" without rel="noreferrer"
        ><i className="fab fa-linkedin-in"></i></a>

      <a className="btn btn-outline-light btn-floating m-2" href="https://github.com/praveen12math" role="button"
        target="_blank" without rel="noreferrer" ><i className="fab fa-github"></i></a>
    </section>


    <div className="mt-5 mb-3">
    
    <div className="row">
    <span className="text-start">@ praveen12math@gmail.com</span>
    <div className="col-lg-6 mt-3">
    <input type="text" className="form-control btn-outline" placeholder="Full Name"/>
    </div>

    <div className="col-lg-6 mt-3">
    <input type="text" className="form-control" placeholder="Phone"/>
    </div>
    <div className="mt-3 col">
        <input type="email" className="form-control" placeholder="Your email"/>
    </div>
    <div className="mt-3 mb-3">
  <textarea className="form-control" placeholder="leave your message here"></textarea>
</div>
    </div>

<button className="btn btn-outline-light d-block mx-auto">Send</button>
    
  
</div>
  </div>

  <div className="text-center p-3 mt-4" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
    © 2021 Copyright: Praveen Yadav
  </div>
</footer>
     );
}
 
export default Footer;