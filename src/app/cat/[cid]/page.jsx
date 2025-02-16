'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function page() {
    let{cid}=useParams()
    let data=[
        {id:1, title:'About Us', description: 'Learn more about our company and team.',
            details:[ 
                {id:1, title:'Experience and Expertise', img:'/informfive.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},

                {id:2, title:'OUR MISSION ', img:'/informfour.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},

                {id:3, title:'About Explore Nepal', img:'/informsix.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},

                {id:4, title:'About Explore Nepal', img:'/informsix.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},

                {id:5, title:'About Explore Nepal', img:'/informsix.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},
            ]
          },
        {id:2, title:'Tours',  description: 'Explore our amazing travel destinations.',
             details:[
                {id:1, title:'Syambhunath Stupa', img:'/Syambhu.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},

                {id:2, title:'Arun Khola ', img:'/informone.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet. For more than <span className="fw-semibold text-dark"> 35 years</span>,'},

                {id:3, title:'Gandruk', img:'/Gandruk.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},

                {id:4, title:'Gandruk', img:'/Gandruk.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},


                {id:5, title:'Gandruk', img:'/Gandruk.jpg', description:'For more than <span className="fw-semibold text-dark"> 35 years</span>, we at <span className="text-primary fw-bold">Explore Nepal</span> , have been striving to combine quality and excellence in organizing experiential tours with the Himalayan ranges of Nepal, Bhutan, Sikkim and Tibet.'},
        ] },

        {id:3, title:'Gallery ' , description: 'View our beautiful travel moments.', 
            details:[
                {id: 1 ,img:'/dfo.jpg', title:'Amazon'},
                {id: 2 ,img:'/dfv.jpg', title:'Columbo'},    
                {id: 3 ,img:'/do.jpg' ,title:'Greek'},
                {id: 4 ,img:'/dt.jpg',title:'Aeroplane'},
                {id: 5 ,img:'/dtr.jpg',title:'Pacific'},
                {id: 6 ,img:'/informone.jpg', title:'Shivapuri'},
                {id: 7 ,img:'/informone.jpg', title:'Shivapuri'},
                {id: 8 ,img:'/informone.jpg', title:'Shivapuri'},
                {id: 9 ,img:'/informone.jpg', title:'Shivapuri'},
                {id: 10 ,img:'/informone.jpg', title:'Shivapuri'},
            ] },

        {id:4, title:'Contact ', description: 'Get in touch with us for inquiries.',
            details:[
                {id:1, img:'/onesherpa.jpg',name:'Tshering Wongdi Sherpa'},
        {id:2, img:'/threeshrepa.jpg',name:'Tshering Wongdi Sherpa'},
        {id:3, img:'/twosherpa.jpg',name:'Tshering Wongdi Sherpa'},
            ]
        },
    ];
    let pageData = data.find(item => item.id === parseInt(cid));
  return (
    <>
      <div className="container mt-5">
            <h2>{pageData.title}</h2>
            <p>{pageData.description}</p>
            {pageData.details && (
                <div className="row mt-4">
                    {pageData.details.map(detail => (
                        <div key={detail.id} className="col-md-4">
                             <Link className='text-decoration-none text-dark'  href={`/details/${cid}/${detail.id}`}>
                            <div className="card shadow-sm border-0 mb-4">
                                <Image src={detail.img} 
                                width={400} height={350}
                                className="card-img-top" alt={''} style={{objectFit: 'cover'}} />
                                <div className="card-body">
                                    <h5 className="card-title">{detail.title } {detail.name}</h5>
                                   <p className="card-text text-dark" dangerouslySetInnerHTML={{ __html: detail.description }}></p>
                                    
                                </div>
                            </div>
                            </Link>
                        </div>
    
                    ))}
                </div>
            )}
        </div>
    </>
  )
}

export default page
