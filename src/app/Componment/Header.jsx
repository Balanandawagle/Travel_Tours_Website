'use client';
import Link from 'next/link'
import React, { useEffect ,useContext} from 'react'
import Booking from './Booking';

function Header() {
  let {state}=useContext(Booking)
    let head=[
        {id:1, title:'About Us'},
        {id:2, title:'Tours'},
        {id:3, title:'Gallery '},
        {id:4, title:'Contact '},
    ];
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
    
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow ">
      <div className="container">
        <Link className="navbar-brand fw-bold " href="/">Bala's Tour & Travel</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" href="/">Home</Link>
            </li>
            {head.map((a) => (
              <li className="nav-item" key={a.id}>
                <Link className="nav-link" href={`/cat/${a.id}`}>{a.title}</Link>
              </li>
            ))}
          </ul>
         
          <Link type="button" className="btn btn-primary position-relative" href={'/book'}>
  Booked
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {state.book.length}
    <span className="visually-hidden">unread messages</span>

  </span>
</Link>
</div>
        </div>
      
    
    </nav>

    </>
  )
}

export default Header
