import { useState } from "react"

export default function useAccordion(){
    const [openAccordion, setOpenAccordion] = useState(null);

    function toggle(id) {
        if (openAccordion == id) {
            return setOpenAccordion(null);
        }

        setOpenAccordion(id);
    }

    return [openAccordion, toggle];
}