import Button from "../Button/Button"
import cardStyle from "./Card.module.css"
import PropTypes from "prop-types"

const para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia architecto minima reprehenderit? Iure eaque nostrum, blanditiis in quos, natus, ea nobis beatae distinctio dicta earum!"

export default function Card({ userButtonStyle, imgSrc = "https://dummyimage.com/720x400",contentHeading="Hartan", contentPara=para , userCardStyle, userContentStyle }) {
    return (

        <section className={`${cardStyle.cardSection} ${userCardStyle}`}>
            <figure>
                <img src={imgSrc} alt="Hartan" />
            </figure>
            <div className={`${cardStyle.content} ${userContentStyle}`}>
                <div>
                    <h1>{contentHeading}</h1>
                    <p>{contentPara}</p>
                </div>
                <Button buttonStyle={userButtonStyle} />
            </div>
        </section>

    )
}

Card.propTypes = {
    buttonStyle: PropTypes.string,
    imgSrc: PropTypes.string,
    userCardStyle: PropTypes.string,
    userContentStyle: PropTypes.string,
};