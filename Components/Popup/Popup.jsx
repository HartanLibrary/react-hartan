import Button from "../Button/Button"
import popupStyle from "./Popup.module.css"
import usePopup from "../../Hooks/Popup"
import PropTypes from "prop-types"

const material = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente, molestiae earum non, vel quo delectus, aliquid nostrum officia alias voluptates! Itaque ratione exercitationem nostrum, molestiae illo, fugit laudantium perspiciatis maiores tempora provident nihil praesentium dignissimos amet illum accusamus natus rerum quam assumenda fuga ipsum dolorem ducimus animi. Eos, dolores!";

export default function Popup({ btnTxt = "Popup", popupContentBoxMaterialHeading = "This is a Popup", popupContentBoxMaterialPara = material, popupContentBoxMaterialAuthor = "- Hartan", userPopupStyle, userPopupContentBox, userPopupContentStyle, userPopupContentBoxMaterialStyle }) {

    const [showPopup, popupRef, popupState, closePopup] = usePopup(false);

    return (
        <section className={`${popupStyle.popup} ${userPopupStyle}`}>
            <Button buttonText={btnTxt} onclick={() => popupState(true)} />
            {
                showPopup &&
                <div className={`${popupStyle.popupContent} ${userPopupContentStyle}`}>
                    <div className={`${popupStyle.popupContentBox} ${userPopupContentBox}`} onClick={closePopup} ref={popupRef}>
                        <button onClick={() => popupState(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                        </button>
                        <div className={`${popupStyle.popupContentBoxMaterial} ${userPopupContentBoxMaterialStyle}`}>
                            <h1>{popupContentBoxMaterialHeading}</h1>
                            <p>{popupContentBoxMaterialPara}</p>
                            <span>{popupContentBoxMaterialAuthor}</span>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

Popup.propTypes = {
    btnTxt: PropTypes.string,
    popupContentBoxMaterialHeading: PropTypes.string,
    popupContentBoxMaterialPara: PropTypes.string,
    popupContentBoxMaterialAuthor: PropTypes.string,
    userPopupStyle: PropTypes.string,
    userPopupContentBox: PropTypes.string,
    userPopupContentStyle: PropTypes.string,
    userPopupContentBoxMaterialStyle: PropTypes.string
};