import sidemenuStyle from "./Sidemenu.module.css"
import PropTypes from "prop-types"

const list = [
    {
        logo: <a><img src="https://dummyimage.com/50x50" /></a>,
        elem: <a>Home</a>,
    },
    {
        logo: <a><img src="https://dummyimage.com/50x50" /></a>,
        elem: <a>About</a>,
    },
    {
        logo: <a><img src="https://dummyimage.com/50x50" /></a>,
        elem: <a>Contact</a>,
    },
    {
        logo: <a><img src="https://dummyimage.com/50x50" /></a>,
        elem: <a>Services</a>,
    },
];

export default function Sidemenu({ navList = list, logoName = "Hartan", id, userNavbarStyle, userNavToggleStyle, userNavHeaderStyle, userNavTitleStyle, userNavContentStyle, userNavButtonStyle }) {

    return (
        <div className={`${sidemenuStyle.navBar} ${userNavbarStyle}`} id={id}>
            <input id="navToggle" className={`${sidemenuStyle.navToggle} ${userNavToggleStyle}`} type="checkbox" />
            <div className={`${sidemenuStyle.navHeader} ${userNavHeaderStyle}`}>
                <span id={`${sidemenuStyle.navTitle}`} className={`${sidemenuStyle.navTitle} ${userNavTitleStyle}`}>{logoName}</span>
                <label htmlFor="navToggle" className={`${sidemenuStyle.lableTag}`}>
                    <span>&lt;</span>
                </label>
            </div>
            <div className={`${sidemenuStyle.navContent} ${userNavContentStyle}`}>
                {
                    navList.map((item, id) => {
                        return (
                            <div className={`${sidemenuStyle.navButton} ${userNavButtonStyle}`} key={id}>
                                {item.logo}
                                <span> {item.elem}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

Sidemenu.propTypes = {
    navList: PropTypes.arrayOf(PropTypes.shape(
        {
            logo: PropTypes.node,
            elem: PropTypes.node
        }
    )),
    logoName: PropTypes.node,
    id: PropTypes.string,
    userNavbarStyle: PropTypes.string,
    userNavToggleStyle: PropTypes.string,
    userNavHeaderStyle: PropTypes.string,
    userNavTitleStyle: PropTypes.string,
    userNavContentStyle: PropTypes.string,
    userNavButtonStyle: PropTypes.string
};