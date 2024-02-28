import buttonStyles from "./button.module.css"
import PropTypes from "prop-types"

export default function Button({ buttonText = "Hartan", userButtonStyle, onClickFunction }) {

    function handleClick(){
        onClickFunction();
    }

    return (
        <button className={`${buttonStyles.generalBtn} ${userButtonStyle}`} onClick={handleClick}>{buttonText}</button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string,
    userButtonStyle: PropTypes.string,
    onClickFunction: PropTypes.func
};