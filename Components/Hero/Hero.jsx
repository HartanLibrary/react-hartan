import Button from "../Button/Button"
import heroSectionStyles from "./Hero.module.css"
import PropTypes from "prop-types"

const about = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta placeat labore cupiditate laudantium atque totam architecto, aliquid, dolores numquam vel odit voluptates beatae quo voluptatum autem voluptate eos facilis tempora culpa, perferendis explicabo minima sunt unde? Natus tempora consectetur unde.";


export default function HeroSection({ heroHeadName = "Hartan Component Library", heroAbout = about, imgSrc = "https://dummyimage.com/720x600", imgState = true, imgAlt = "Hartan", buttonText = "Button", onClickFunction, userHeroSectionStyle, userHeroContentStyle, userButtonStyle }) {

    return (
        <section className={`${heroSectionStyles.heroSection} ${userHeroSectionStyle}`}>
            <div className={`${heroSectionStyles.heroSectionAbout} ${userHeroContentStyle}`}>
                <h1>{heroHeadName}</h1>
                <div>{heroAbout}</div>
                <Button userButtonStyle={`${userButtonStyle}`} buttonText={buttonText} onClickFunction={onClickFunction} />
            </div>

            {
                imgState &&
                <figure className={`${heroSectionStyles.heroImage}`}>
                    <img src={imgSrc} alt={imgAlt} />
                </figure>
            }
        </section>
    )
}

HeroSection.propTypes = {
    heroHeadName: PropTypes.node,
    heroAbout: PropTypes.node,
    imgSrc: PropTypes.string,
    imgState: PropTypes.bool,
    imgAlt:PropTypes.string,
    buttonText: PropTypes.node,
    onClickFunction: PropTypes.func,
    userHeroSectionStyle: PropTypes.string,
    userHeroContentStyle: PropTypes.string,
    userButtonStyle: PropTypes.string
};