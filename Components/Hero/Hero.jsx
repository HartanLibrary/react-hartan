import Button from "../Button/Button"
import heroSectionStyles from "./Hero.module.css"
import PropTypes from "prop-types"

export default function HeroSection({ heroHeadName = "Hartan Component Library", heroAbout = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta placeat labore cupiditate laudantium atque totam architecto, aliquid, dolores numquam vel odit voluptates beatae quo voluptatum autem voluptate eos facilis tempora culpa, perferendis explicabo minima sunt unde? Natus tempora consectetur unde.", userHeroSectionStyle, userHeroAboutStyle, userButtonStyle, imgSrc = "https://dummyimage.com/720x600" }) {

    return (
        <section className={`${heroSectionStyles.heroSection} ${userHeroSectionStyle}`}>
            <div className={`${heroSectionStyles.heroSectionAbout} ${userHeroAboutStyle}`}>
                <h1>{heroHeadName}</h1>
                <p>{heroAbout}</p>
                <Button buttonStyle={`${userButtonStyle}`} />
            </div>

            <figure className={`${heroSectionStyles.heroImage}`}>
                <img src={imgSrc} alt="Hartan" />
            </figure>
        </section>
    )
}

HeroSection.propTypes = {
    heroHeadName: PropTypes.string,
    heroAbout: PropTypes.string,
    imgSrc: PropTypes.string,
    heroAboutStyle: PropTypes.string,
    heroSectionStyle: PropTypes.string,
    buttonStyle: PropTypes.string,
    userHeroSectionStyle: PropTypes.string,
    userHeroAboutStyle: PropTypes.string,
    userButtonStyle: PropTypes.string
};