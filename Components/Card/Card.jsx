import Button from "../Button/Button"
import cardStyle from "./Card.module.css"
import PropTypes from "prop-types"

const para = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia architecto minima reprehenderit? Iure eaque nostrum, blanditiis in quos, natus, ea nobis beatae distinctio dicta earum!"

export default function Card({ buttonText = "Card Button", onClickFunction, userButtonStyle, imgSrc = "https://dummyimage.com/720x400", imgState = true, imgAlt = "Hartan", contentHeading = "Hartan", contentPara = para, userCardStyle, userContentStyle }) {

    return (
        <section className={`${cardStyle.cardSection} ${userCardStyle}`}>
            {
                imgState &&
                <figure>
                    <img src={imgSrc} alt={imgAlt} />
                </figure>
            }

            <div className={`${cardStyle.content} ${userContentStyle}`}>
                <div>
                    <h1>{contentHeading}</h1>
                    <div>{contentPara}</div>
                </div>
                <Button userButtonStyle={userButtonStyle} buttonText={buttonText} onClickFunction={onClickFunction} />
            </div>
        </section>
    )
}

Card.propTypes = {
    contentHeading: PropTypes.node,
    contentPara: PropTypes.node,
    buttonText: PropTypes.node,
    userButtonStyle: PropTypes.string,
    onClickFunction: PropTypes.func,
    imgSrc: PropTypes.string,
    imgState: PropTypes.bool,
    imgAlt:PropTypes.string,
    userCardStyle: PropTypes.string,
    userContentStyle: PropTypes.string,
};