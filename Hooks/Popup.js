import { useRef, useState } from "react"

export default function usePopup(initialState){
    const [showPopup, setShowPopup] = useState(initialState);

    const popupRef = useRef(null);

    const popupState = (value) => {
        value === true ? setShowPopup(true) : setShowPopup(false);
    }

    function closePopup(e) {
        if (popupRef.current === e.target) {
            setShowPopup(false);
        }
    }

    return [showPopup, popupRef, popupState, closePopup];
} 