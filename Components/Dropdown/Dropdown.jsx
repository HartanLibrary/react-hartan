import { useState } from "react"
import dropdownStyle from "./Dropdown.module.css"
import PropTypes from "prop-types"

const list = [
    "Home",
    "About",
    "Contact",
    "Services"
];

export default function Dropdown({ listItem = list, btnTxt = "Dropdown", userDropdownStyle, userDropdownList,userButtonStyle,userDropdownListItem }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={`${dropdownStyle.dropdown} ${userDropdownStyle}`}>
            <button className={`${dropdownStyle.dropdownBtn} ${userButtonStyle}`} onClick={() => setIsOpen((prev) => !prev)}>{btnTxt}
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
            <ul className={`${dropdownStyle.dropdownList} ${userDropdownList}`}>
                {
                    isOpen && (
                        listItem.map((listText, id) => {
                            return <li className={`${dropdownStyle.dropdownListItem} ${userDropdownListItem}`} key={id} onClick={() => setIsOpen((prev)=>!prev)}><span>{listText}</span></li>
                        })
                    )
                }
            </ul>
        </section>
    )
}

Dropdown.propTypes = {
    listItem: PropTypes.arrayOf(PropTypes.string),
    btnTxt: PropTypes.string,
    userDropdownStyle: PropTypes.string,
    userButtonStyle: PropTypes.string,
    userDropdownList:PropTypes.string,
    userDropdownListItem:PropTypes.string
};