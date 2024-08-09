import useCarousel from "../../Hooks/Carousel"
import carouselStyle from "./Carousel.module.css"
import PropTypes from "prop-types"

const imageList = [
    "https://dummyimage.com/601x300",
    "https://dummyimage.com/602x300",
    "https://dummyimage.com/603x300",
    "https://dummyimage.com/604x300",
    "https://dummyimage.com/605x300",
];

export default function Carousel({ images = imageList, id, imgLoad, userCarouselStyle, userImagesStyle }) {

    const [currentSlide, handleLeftArrow, handleRightArrow] = useCarousel(0, images.length);

    return (
        <section className={`${carouselStyle.carousel} ${userCarouselStyle}`} id={id}>
            <div className={`${carouselStyle.arrows}`}>
                <span className={`${carouselStyle.leftArrow}`} onClick={handleLeftArrow}>&lt;</span>
                <span className={`${carouselStyle.rightArrow}`} onClick={handleRightArrow}>&gt;</span>
            </div>
            <div className={`${carouselStyle.images} ${userImagesStyle}`}>
                {
                    images.map((image, index) => {
                        return (
                            <figure key={index} className={`${carouselStyle.slides}`} style={{ display: currentSlide === index ? "block" : "none" }}>
                                <img src={image} alt={`Slide ${index + 1}`} loading={imgLoad}/>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    )
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    userCarouselStyle: PropTypes.string,
    userImagesStyle: PropTypes.string
};
