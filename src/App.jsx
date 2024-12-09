import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Listgroup from './components/Listgroup';

const App = () => {
  const [Feedbacks, setFeedbacks] = useState([
    // You can uncomment these initial feedbacks if needed
    // { id: 1, review: "good product", rating: 5 },
    // { id: 2, review: "bad product", rating: 5 },
  ]);

  const [edit, setEdit] = useState({
    Feedback: {},
    isEdit: false,
  });

  // Set feedback to be edited
  const editFeedback = (feedback) => {
    setEdit({ Feedback: feedback, isEdit: true });
  };

  // Update feedback in the list
  const updateFeedback = (updatedFeedback) => {
    setFeedbacks(
      Feedbacks.map((item) =>
        item.id === updatedFeedback.id ? updatedFeedback : item
      )
    );
    setEdit({ Feedback: {}, isEdit: false }); // Reset after update
  };

  // Remove feedback from the list
  const handleRemove = (id) => {
    setFeedbacks(Feedbacks.filter((item) => item.id !== id));
  };

  // Add new feedback
  const addFeedback = (rating,review ) => {
    setFeedbacks([
      { id: crypto.randomUUID(), review, rating },
      ...Feedbacks,
    ]);
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form
          addFeedback={addFeedback}
          edit={edit}
          updateFeedback={updateFeedback}
        />
        <Listgroup
          Feedbacks={Feedbacks}
          handleRemove={handleRemove}
          editFeedback={editFeedback}
        />
      </div>
    </>
  );
};

export default App;
