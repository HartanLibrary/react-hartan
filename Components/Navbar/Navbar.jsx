import navbarStyles from "./Navbar.module.css"
import useSidebar from "../../Hooks/Sidebar"
import Button from "../Button/Button"
import PropTypes from "prop-types"


const list = [
    {
        href: "",
        text: "Home",
    },
    {
        href: "",
        text: "About",
    },
    {
        href: "",
        text: "Contact",
    },
    {
        href: "",
        text: "Services",
    }
];

const states = {
    logo: {
        full: true,
        img: true,
        name: true,
    },
    buttonState: true,
};

export default function Navbar({ navList = list, statesObj = states, onClickFunction, buttonText = "Light / Dark", logoImgSrc = "https://dummyimage.com/374x416", logoName = "Hartan", userHeaderStyle, userSideBarStyle, userNavListStyle, userNavListItemStyle, userLogoStyle, userButtonStyle }) {

    const [sidebarStatus, openSidebar, closeSidebar] = useSidebar(false);

    return (
        <header className={`${navbarStyles.headerStyle} ${userHeaderStyle}`}>
            <button className={`${navbarStyles.openMenuBtn} `} onClick={openSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </button>

            {
                statesObj.logo.full && (
                    <div className={`${navbarStyles.logo} ${userLogoStyle}`}>
                        {statesObj.logo.img && <img src={logoImgSrc} alt="hartan-logo" />}
                        {statesObj.logo.name && <span>{logoName}</span>}
                    </div>
                )
            }


            {
                sidebarStatus ?
                    (
                        <nav className={`${navbarStyles.sidebar} ${userSideBarStyle}`}>
                            <button className={navbarStyles.closeMenuBtn} onClick={closeSidebar}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                            </button>
                            <ul>
                                {
                                    navList?.map((listItem, id) => {
                                        return <li key={id} onClick={closeSidebar} className={`${userNavListItemStyle}`}>
                                            <a href={listItem.href}>{listItem.text}</a>
                                        </li>
                                    })
                                }
                            </ul>
                        </nav>
                    ) : (
                        <nav className={`${navbarStyles.navbar} ${userNavListStyle}`}>
                            <ul>
                                {
                                    navList?.map((listItem, id) => {
                                        return <li key={id} className={`${userNavListItemStyle}`}><a href={listItem.href}>{listItem.text}</a></li>
                                    })
                                }
                            </ul>
                        </nav>
                    )
            }

            {
                statesObj.buttonState &&
                <Button buttonStyle={`${userButtonStyle}`} buttonText={buttonText} onClickFunction={onClickFunction}></Button>
            }
        </header>
    )
}


Navbar.propTypes = {
    navList: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string
    })),
    imgSrc: PropTypes.string,
    logoName: PropTypes.string,
    buttonText: PropTypes.string,
    onClickFunction: PropTypes.func,
    statesObj: PropTypes.shape({
        logo: PropTypes.shape({
            full: PropTypes.bool,
            img: PropTypes.bool,
            name: PropTypes.bool
        }),
        buttonState: PropTypes.bool
    }),
    userHeaderStyle: PropTypes.string,
    userSideBarStyle: PropTypes.string,
    userNavListStyle: PropTypes.string,
    userNavListItemStyle: PropTypes.string,
    userLogoStyle: PropTypes.string,
    userButtonStyle: PropTypes.string
};