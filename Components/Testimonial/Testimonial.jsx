import testimonialStyle from "./Testimonial.module.css"
import PropTypes from "prop-types"

const userreview = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae culpa nulla minus consequuntur voluptatem ad, facilis pariatur, cupiditate quas atque maxime quo a praesentium."

export default function Testimonial({ review = userreview, reviewerName = "Hartan", reviewerPosition = "UI/UX Designer", userTestimonialStyle, userReviewStyle, userReviewerStyle }) {

    return (
        <section className={`${testimonialStyle.testimonial} ${userTestimonialStyle}`}>

            <div className={`${testimonialStyle.review} ${userReviewStyle}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#434447" d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg> {review} <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#434447" d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" /></svg>
            </div>

            <div className={`${testimonialStyle.reviewerName} ${userReviewerStyle}`}>
                <p>{reviewerName}</p>
                <p>{reviewerPosition}</p>
            </div>

        </section>
    )
}

Testimonial.propTypes = {
    review: PropTypes.string,
    reviewerName: PropTypes.string,
    reviewerPosition: PropTypes.string,
    userTestimonialStyle: PropTypes.string,
    userReviewStyle: PropTypes.string,
    userReviewerStyle: PropTypes.string
};