import React, { useState, useEffect } from 'react';

const Form = ({ addFeedback, edit, updateFeedback }) => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update or add feedback based on the isEdit flag
    if (edit.isEdit) {
      // Update feedback
      updateFeedback({ id: edit.Feedback.id, rating, review });
    } else {
      // Add new feedback
      addFeedback(rating, review);
    }

    // Reset form after submit
    setRating(1);
    setReview('');
  };

  // Pre-fill the form when editing a feedback
  useEffect(() => {
    if (edit.isEdit) {
      setRating(edit.Feedback.rating); // Pre-fill rating
      setReview(edit.Feedback.review); // Pre-fill review
    }
  }, [edit]);

  return (
    <div className="card p-3 rounded-0 shadow-sm">
      <form onSubmit={handleSubmit}>
        <select
          required
          className="form-select rounded-0"
          onChange={(e) => setRating(Number(e.target.value))}
          value={rating}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <textarea
          className="form-control my-3 rounded-0"
          placeholder="Enter Review Here"
          onChange={(e) => setReview(e.target.value)}
          value={review}
        ></textarea>

        <button className="btn btn-success rounded-0 my-2 w-100">
          {edit.isEdit ? 'Update Review' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default Form;
