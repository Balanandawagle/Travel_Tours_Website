'use client'
import React, { useContext } from 'react'
import Booking from '../Componment/Booking';

function page() {
    let{state,dispatch}=useContext(Booking);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-md-offset-1">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Tour</th>
                  <th>Quantity</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Total</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {state.book.map((a) => (
                  <tr key={a.id}>
                    <td className="col-sm-8 col-md-6">
                      <div className="media">
                        <a className="thumbnail pull-left" href="#">
                          <img
                            className="media-object"
                            src={a.img} 
                            alt={a.title}
                            style={{ width: 72, height: 72 }}
                          />
                        </a>
                        <div className="media-body">
                          <h4 className="media-heading">
                            {a.title}
                          </h4>
                          <p className="text-muted">{a.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="col-sm-1 col-md-1" style={{ textAlign: 'center' }}>
                      <input type="number" className="form-control" defaultValue={1} />
                    </td>
                    <td className="col-sm-1 col-md-1 text-center">
                      <strong>$200</strong> 
                    </td>
                    <td className="col-sm-1 col-md-1 text-center">
                      <strong>$200</strong>
                    </td>
                    <td className="col-sm-1 col-md-1">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => dispatch({ type: 'remove', payload: a })}
                      >
                        <span className="glyphicon glyphicon-remove" /> Remove
                      </button>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td>
                    <button type="button" className="btn btn-default">
                      <span className="glyphicon glyphicon-shopping-cart" /> Continue Booking
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-success">
                      Checkout <span className="glyphicon glyphicon-play" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default page
