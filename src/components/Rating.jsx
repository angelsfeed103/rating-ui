import { useState } = from "react"

function Rating(){
    const stars = Array.from({lenght: 5}, (_, i) => i + 1)
    const [taing, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const clicked = (index) => console.log('clicked', index)
    const feedbackMessage = ['Terrible', '  Poor', 'Fair', 'Good', 'Excellent']

    const handSubmit = ()=> {
        if(rating > 0){
            setSubmitted(true)
        }
    }

    const

    return(
    <div className="rating-container">
    <h2> Rate Your Experience! <h2>
        <p>{rating}</p>
        <p>{hover}</p>
        <div className="stars">
            {[1,2,3,4].map((star, index) => (
               <span
               key={star}
               onClick={() => setRating(star)}
               onMouseEnter={() => setHover(star)}
               onMouseLeave={() => setHover(0)}
               className = {`star ${star <= (hover || rating) ? 'active' : ''}`}
               > 
               {'\u2605'}
            </span>
            
            ))}
        </div>
        {rating > 0 && <p className="feedback">{ feedbackMessage[rating - 1]}</p>}
        <button
             className="submit-btn"
             onClick={handSumit}
             disabled={rating === 0}
        >
            submit
          </button>

          {
             submitted && (
                <div className= "modal-overlay">
                    <div className="modal">
                        <h2>Thank you</h2>
                        <p>You rated us {rating} star{rating > 1 ? 's': ''}</p>
                        <button
                            onClick = {coseModa1}
                            className = "close-btn"
                        >
                            Close
                        </button>
                    </div>
                </div>     
             )
          }
        </div>
    );
}