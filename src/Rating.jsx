 import { useState } = from "react"


 function Rating(){
    const stars = Array.from({lenght: 5}, (_, i) => i + 1)
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const clicked = (index) => console.log('clicked', index)
    const feedbackMessage = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']

    const handleSubmit = ()=> {
        if(rating > 0){
            setSubmitted(true)
        }
    }

    const closeModal = () =>{
        setSubmitted(false)
        setRating(0)
        setHover(0)
    }

    return(
        <div className="rating-container">
            <h2>Rate your Experience!</h2>
            <p>{rating}</p>
            <p>{hover}</p>
            <div className="stars">
                {[1,2,3,4,5].map((star, index) => (
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
            {rating > 0 && <p className="feedback"></p>}
            <button
                className="submit-btn"
                onClick={handleSumit}
                disabled={rating === 0}
                >
                    Submit
                </button>
                
                {
                    submitted && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <h2>Thank you! </h2>
                                <p>Yor rated us {rating} star{ratomg > 1 ? 's' : ''}</p>
                                <button
                                    onClick = {coseModal}
                                    className = "close-btn"
                                >
                                     close
                                </button>
                            </div>
                        </div>
                    ) 

                }

        </div>
        );
 }
