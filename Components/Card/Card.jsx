import Button from "../Button/Button"
import cardStyle from "./Card.module.css"
import PropTypes from "prop-types"

const para = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia architecto minima reprehenderit? Iure eaque nostrum, blanditiis in quos, natus, ea nobis beatae distinctio dicta earum!"

export default function Card({ buttonText = "Card Button", onClickFunction, userButtonStyle, imgSrc = "https://dummyimage.com/720x400", imgState = true, contentHeading = "Hartan", contentPara = para, userCardStyle, userContentStyle }) {

    return (
        <section className={`${cardStyle.cardSection} ${userCardStyle}`}>
            {
                imgState &&
                <figure>
                    <img src={imgSrc} alt="Hartan" />
                </figure>
            }

            <div className={`${cardStyle.content} ${userContentStyle}`}>
                <div>
                    <h1>{contentHeading}</h1>
                    <p>{contentPara}</p>
                </div>
                <Button userButtonStyle={userButtonStyle} buttonText={buttonText} onClickFunction={onClickFunction}/>
            </div>
        </section>
    )
}

Card.propTypes = {
    contentHeading: PropTypes.string,
    contentPara: PropTypes.string,
    buttonText: PropTypes.string,
    userButtonStyle: PropTypes.string,
    onClickFunction: PropTypes.func,
    imgSrc: PropTypes.string,
    imgState: PropTypes.bool,
    userCardStyle: PropTypes.string,
    userContentStyle: PropTypes.string,
};