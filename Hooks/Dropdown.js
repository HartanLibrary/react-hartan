import { useState } from "react";

export default function useDropdown(initialButtonText, onClickFunction){
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownText, setDropdownText] = useState(initialButtonText);

    async function handleDropdownButtonClick(e){
        setIsOpen(!isOpen);
        setDropdownText(e.target.innerText);
        onClickFunction(e.target.innerText);
    }

    return [isOpen, setIsOpen, handleDropdownButtonClick, dropdownText];
}