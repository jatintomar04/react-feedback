import React from 'react'
import Listitem from './Listitem'

const Listgroup = ({ Feedbacks , handleRemove , editFeedback }) => {
  return (
    <ul className="list-group my-3 rounded-0">
      {
        Feedbacks.map(Feedback => 
        <Listitem key={Feedback.id} 
        Feedback={Feedback}
         handleRemove={handleRemove}
         editFeedback={editFeedback}
         />)
      }
      </ul>
  )
}

export default Listgroup