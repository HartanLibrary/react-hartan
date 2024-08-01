import buttonStyles from "./button.module.css"
import PropTypes from "prop-types"

export default function Button({ buttonText = "Hartan", id, userButtonStyle, onClickFunction }) {

    function handleClick(){
        onClickFunction();
    }

    return (
        <button className={`${buttonStyles.generalBtn} ${userButtonStyle}`} onClick={handleClick} id={id}>{buttonText}</button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.node,
    id: PropTypes.string,
    userButtonStyle: PropTypes.string,
    onClickFunction: PropTypes.func
};