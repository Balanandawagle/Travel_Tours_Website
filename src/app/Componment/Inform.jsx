'use client'
import React, { useContext } from 'react'
import Image from "next/image";
import Booking from './Booking';

function Inform() {
  let{state,dispatch}=useContext(Booking)
    let about=[
        {id:1, title:'Experience and Expertise', img:'/informfive.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},

        {id:2, title:'OUR MISSION ', img:'/informfour.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},

        {id:3, title:'About Explore Nepal', img:'/informsix.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},
    ];

    let tour=[
        {id:1, title:'Syambhunath Stupa', img:'/Syambhu.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},

        {id:2, title:'Arun Khola ', img:'/informone.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet. For more than <span className="fw-semibold text-dark"> 35 years</span>,'},

        {id:3, title:'Gandruk', img:'/Gandruk.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},
        
    ]

    let gall=[
        {id: 1 ,img:'/dfo.jpg', title:'Amazon'},
        {id: 2 ,img:'/dfv.jpg', title:'Columbo'},    
        {id: 3 ,img:'/do.jpg' ,title:'Greek'},
        {id: 4 ,img:'/dt.jpg',title:'Aeroplane'},
        {id: 5 ,img:'/dtr.jpg',title:'Pacific'},
        {id: 6 ,img:'/informone.jpg', title:'Shivapuri'},
    ];

    let team=[
        {id:1, img:'/onesherpa.jpg',name:'Tshering Wongdi Sherpa'},
        {id:2, img:'/threeshrepa.jpg',name:'Tshering Wongdi Sherpa'},
        {id:3, img:'/twosherpa.jpg',name:'Tshering Wongdi Sherpa'},
    ]
  return (
    <>
     <section className='py-5 bg-light border-bottom border-2 '>
     <h1 className='text-center mb-5 fw-bold'>About Us</h1>
        <div className="container">
        <div className="row justify-content-center">
            {about.map((a) => (
              <div className="col-lg-4 mb-4" key={a.id}>
                <div className="card border-0 shadow-lg rounded">
                <div className="text-center p-3">
                  <Image
                    src={a.img}
                    alt=""
                    width={450}
                    height={300}
                    className=" rounded-top img-fluid"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="p-4 text-center">
                  <h4 className="fw-bold text-primary mb-3">{a.title}</h4>
                  <p
                    className="lead text-muted"
                    dangerouslySetInnerHTML={{ __html: a.description }}
                  ></p>
                  
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className='py-5 bg-light border-bottom border-2 '>
     <h1 className='text-center mb-5 fw-bold'>Tour and Travel</h1>
        <div className="container">
        <div className="row justify-content-center">
            {tour.map((a) => (
              <div className="col-lg-4 mb-4" key={a.id}>
                <div className="card border-0 shadow-lg rounded">
                <div className="text-center p-3">
                  <Image
                    src={a.img}
                    alt=""
                    width={450}
                    height={300}
                    className=" rounded-top img-fluid"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="p-4 text-center">
                  <h4 className="fw-bold text-primary mb-3">{a.title}</h4>
                  <p
                    className="lead text-muted"
                    dangerouslySetInnerHTML={{ __html: a.description }}
                  ></p>
<button className='btn btn-danger' onClick={() => dispatch({ type: 'ADD_TO_BOOK', payload: a })}>Book Now</button>                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section  className='py-5 bg-light border-bottom border-2 '>
    <h1 className='text-center mb-5 fw-bold'>Gallery</h1>
          <div className="container">
            <div className="row g-4">
        {gall.map((a)=>(
            <div className="col-md-4 col-sm-6" key={a.id}>
                <div className="card border-0 shadow">
                    <Image src={a.img} 
                    width={300}
                    height={250}
                    className='card-img-top rounded' style={{objectFit: 'cover'}}/>
                    <div className="position-absolute bottom-0 text-white w-100 p-3  ">
                        <h5>{a.title}</h5>
                    </div>
                </div>
            </div>
        ))}
            </div>
          </div>
        </section>

        <section className='py-5 bg-light border-bottom border-2 '>
        <h1 className='text-center mb-5 fw-bold'>Professional Team</h1>
        <div className="container">
        <div className="row justify-content-center">
            {team.map((a) => (
              <div className="col-lg-4 mb-4" key={a.id}>
                <div className="card border-0 shadow-lg rounded">
                <div className="text-center p-3">
                  <Image
                    src={a.img}
                    alt=""
                    width={450}
                    height={450}
                    className=" rounded-circle img-fluid"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="p-4 text-center">
                  <h4 className="fw-bold text-primary mb-3">{a.name}</h4>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        </div>
        </section>


    </>
  )
}

export default Inform
