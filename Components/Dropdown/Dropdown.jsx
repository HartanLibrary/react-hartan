import useDropdown from "../../Hooks/Dropdown"
import dropdownStyle from "./Dropdown.module.css"
import PropTypes from "prop-types"

const list = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4"
];

function onClickItem(val){
    console.log(val);
}

export default function Dropdown({ listItem = list, buttonText = "Dropdown", onClickFunction = onClickItem, userDropdownStyle, userDropdownListStyle, userDropdownListItemStyle, userButtonStyle }) {

    const [isOpen, setIsOpen, handleDropdownButtonClick, dropdownText] = useDropdown(buttonText, onClickFunction);

    return (
        <section className={`${dropdownStyle.dropdown} ${userDropdownStyle}`}>
            <button className={`${dropdownStyle.dropdownBtn} ${userButtonStyle}`} onClick={() => setIsOpen(!isOpen)}>{dropdownText}
                {
                    isOpen ? (
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg>
                        </span>
                    ) :
                        (
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#000000" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                            </span>
                        )
                }
            </button>
            <ul className={`${dropdownStyle.dropdownList} ${userDropdownListStyle}`}>
                {
                    isOpen && (
                        listItem.map((listText, id) => {
                            return <li className={`${dropdownStyle.dropdownListItem} ${userDropdownListItemStyle}`} key={id} onClick={handleDropdownButtonClick}><span>{listText}</span></li>
                        })
                    )
                }
            </ul>
        </section>
    )
}

Dropdown.propTypes = {
    listItem: PropTypes.arrayOf(PropTypes.string),
    buttonText: PropTypes.string,
    onClickFunction: PropTypes.func,
    userDropdownStyle: PropTypes.string,
    userButtonStyle: PropTypes.string,
    userDropdownList: PropTypes.string,
    userDropdownListItem: PropTypes.string
};