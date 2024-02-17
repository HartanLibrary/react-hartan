import buttonStyles from "./button.module.css";
import PropTypes, { func } from "prop-types";
import "../index.css"

export default function Button({ buttonText = "Hartan", buttonStyle, onclick }) {

    function handleClick(){
        onclick();
    }

    return (
        <button className={`${buttonStyles.generalBtn} ${buttonStyle}`} onClick={handleClick}>{buttonText}</button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string,
}