import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs'

import './Thanks.css'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({ data }) => {
  return (
    <div className='thanks-container'>
      <h2>You are almost there...</h2>
      <p>Your opinion it is so important to us and soon you will receive a 10% off coupon to your next purchase! </p>
      <p>To complete your review click the Send button below.</p>
      <h3>Here it is a summary of your evaluation {data.name}: </h3>
      <p className="review-data">
        <span>Satisfied with the product: </span>
        {emojiData[data.review]}
      </p>
      <p className='review-data'>
        <span>Comment: </span>
        {data.comment}
      </p>
    </div>
  )
}

export default Thanks