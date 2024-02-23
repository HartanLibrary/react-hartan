import { useState } from "react"

export default function useCarousel(initialValue, imageListLength){
    const [currentSlide, setCurrentSlide] = useState(initialValue);

    function handleLeftArrow() {
        currentSlide === 0 ? setCurrentSlide(imageListLength - 1) : setCurrentSlide(currentSlide - 1);
    }
    
    function handleRightArrow() {
        currentSlide === imageListLength - 1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
    }

    return [currentSlide, handleLeftArrow, handleRightArrow];
}