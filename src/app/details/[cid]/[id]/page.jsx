'use client'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    let { cid, id } = useParams()
    let data = [
        { 
          id: 1, 
          title: 'About Us', 
          description: 'Learn more about our company and team.',
          details: [
            {id: 1, title: 'Experience and Expertise', img: '/informfive.jpg', description: 'For more than 35 years, we at Explore Nepal have been striving to combine quality and excellence...'},
            {id: 2, title: 'OUR MISSION', img: '/informfour.jpg', description: 'For more than 35 years, we at Explore Nepal have been striving to combine quality and excellence...'},
            {id: 3, title: 'About Explore Nepal', img: '/informsix.jpg', description: 'For more than 35 years, we at Explore Nepal have been striving to combine quality and excellence...'}
          ]
        },
        { 
          id: 2, 
          title: 'Tours', 
          description: 'Explore our amazing travel destinations.',
          details: [
            {id: 1, title: 'Syambhunath Stupa', img: '/Syambhu.jpg', description: 'For more than 35 years, we at Explore Nepal have been striving to combine quality and excellence...'},
            {id: 2, title: 'Arun Khola', img: '/informone.jpg', description: 'For more than 35 years, we at Explore Nepal have been striving to combine quality and excellence...'}
          ]
        },
        { 
          id: 3, 
          title: 'Gallery', 
          description: 'View our beautiful travel moments.',
          details: [
            {id: 1, img: '/dfo.jpg', title: 'Amazon'},
            {id: 2, img: '/dfv.jpg', title: 'Columbo'}
          ]
        },
        { 
          id: 4, 
          title: 'Contact', 
          description: 'Get in touch with us for inquiries.',
          details: [
            {id: 1, img: '/onesherpa.jpg', name: 'Tshering Wongdi Sherpa'},
            {id: 2, img: '/threeshrepa.jpg', name: 'Tshering Wongdi Sherpa'}
          ]
        }
      ];
    
      let categoryData = data.find(item => item.id === parseInt(cid))
      let detailData = categoryData.details.find(item => item.id === parseInt(id))
  return (
    <>
       <div className="container mt-5">
        <h2>{detailData.title}</h2>
        <img src={detailData.img} alt={detailData.title} className="img-fluid" />
        <p className="mt-3" dangerouslySetInnerHTML={{ __html: detailData.description }} />
      </div>
    </>
  )
}

export default page
