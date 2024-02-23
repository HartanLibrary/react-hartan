import buttonStyles from "./button.module.css";
import PropTypes from "prop-types";
import "../index.css"

export default function Button({ buttonText = "Hartan", userButtonStyle, onclick }) {

    function handleClick(){
        onclick();
    }

    return (
        <button className={`${buttonStyles.generalBtn} ${userButtonStyle}`} onClick={handleClick}>{buttonText}</button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string,
    userButtonStyle: PropTypes.string,
    onclick: PropTypes.func
};