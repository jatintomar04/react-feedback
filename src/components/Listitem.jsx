import React from 'react'

const Listitem = ({ Feedback , handleRemove, editFeedback }) => {
  return (
    <li className= "list-group-item rounded-0 my-2">
    <h1>rating :{ Feedback.rating }</h1>
    <p>Review : { Feedback.review }</p>
  

    <button className='btn btn-danger float-end' onClick={() => handleRemove(Feedback.id)}> delete</button>
      
    <button className='btn btn-warning mx-2 float-end '  onClick={() => editFeedback(Feedback)}> Edit</button>
   
  </li>
  )
}

export default Listitem