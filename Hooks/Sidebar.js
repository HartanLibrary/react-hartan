import { useState } from "react"

export default function useSidebar(initialValue) {
    const [sidebarStatus, setSidebarStatus] = useState(initialValue);

    function openSidebar(){
        setSidebarStatus(true);
    }

    function closeSidebar(){
        setSidebarStatus(false);
    }

    return [sidebarStatus, openSidebar, closeSidebar];
}