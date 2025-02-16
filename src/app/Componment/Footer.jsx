import Link from 'next/link';
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaHouseMedical, FaLinkedin, FaPhone, FaPrint, FaSquareInstagram, FaTwitter } from "react-icons/fa6";

function Footer() {
  let head=[
    {id:1, title:'About Us'},
    {id:2, title:'Tours'},
    {id:3, title:'Gallery '},
    {id:4, title:'Contact '},
];
  return (
    <>
   

  <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#1c2331'}}>

    <section className="d-flex justify-content-between p-4" style={{backgroundColor: '#6351ce'}}>

      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
    
      <div>
        <a href className="text-white me-4">
        <FaFacebook />
        </a>
        <a href className="text-white me-4">
        <FaTwitter />
        </a>
     
        <a href className="text-white me-4">
        <FaSquareInstagram />
        </a>
        <a href className="text-white me-4">
        <FaLinkedin />
        </a>
        <a href className="text-white me-4">
        <FaGithub />
        </a>
      </div>

    </section>
  
    <section >
      <div className="container text-center text-md-start mt-5">

        <div className="row mt-3">
      
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
    
            <h6 className="text-uppercase fw-bold">Bala's Tour & Travels</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
            The tour and travel industry encompasses a wide range of services and offerings designed to help individuals plan and enjoy their trips.
            </p>
          </div>
         
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
            {head.map((a) => (

                <Link className="text-white d-block"  href={''} key={a.id}>{a.title}</Link>
         
            ))}
              
            </p>
          
          </div>
         
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
            {head.map((a) => (

<Link className="text-white d-block "  href={''} key={a.id}>{a.title}</Link>

))}
            </p>
            
          </div>
   
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p><FaHouseMedical className="mr-3" /> New York, NY 10012, US</p>
            <p><FaEnvelope className="mr-3" /> info@example.com</p>
            <p><FaPhone className="mr-3" /> + 01 234 567 88</p>
            <p><FaPrint className="mr-3" /> + 01 234 567 89</p>
          </div>
     
        </div>
    
      </div>
    </section>
  
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    
  </footer>

    </>
  )
}

export default Footer
