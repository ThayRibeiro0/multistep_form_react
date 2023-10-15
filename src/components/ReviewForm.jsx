import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill

} from 'react-icons/bs'


const ReviewForm = () => {
  return (
    <div className='review-form'>
        <div className="form-control score-container">
          <label className="radio-container">
            <input type="radio" value="unsatisfied" name="review" required/>
            <BsFillEmojiFrownFill />
            <p>Dissatisfied</p>
          </label>
          <label className="radio-container">
            <input type="radio" value="neutral" name="review" required/>
            <BsFillEmojiNeutralFill />
            <p>Neutral</p>
          </label>
          <label className="radio-container">
            <input type="radio" value="satisfied" name="review" required/>
            <BsFillEmojiSmileFill />
            <p>Satisfied</p>
          </label>
          <label className="radio-container">
            <input type="radio" value="very satisfied" name="review" required/>
            <BsFillEmojiHeartEyesFill />
            <p>Very Satisfied</p>
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="comment">Comment: </label>
          <textarea 
            name="comment" 
            id="comment" 
            placeholder='Tell us how was your experience with the product...'
            required
          ></textarea>
        </div>
    </div>
  )
}

export default ReviewForm