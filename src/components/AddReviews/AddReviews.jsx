import React from 'react'
import "./addreviews.scss"
import { GoAlert } from "react-icons/go"

const AddReviews = () => {
  return (
    <div className='mt-5 addReviews'>
        <h6>REVIEWS</h6>
        <p><GoAlert/>You can only review this item only if your have purchased it.</p>
        <div className='d-flex w-100 buttonReview'> 
            <button>ADD REVIEW</button>
            <h5>No Reviews</h5>
        </div>
    </div>
  )
}

export default AddReviews