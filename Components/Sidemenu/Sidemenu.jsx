import sidemenuStyle from "./Sidemenu.module.css"
import PropTypes from "prop-types"

const list = [
    {
        elem: <a>Home</a>,
    },
    {
        elem: <a>About</a>,
    },
    {
        elem: <a>Contact</a>,
    },
    {
        elem: <a>Services</a>,
    },
];

export default function Sidemenu({ navList = list, imgSrc = "https://dummyimage.com/50x50", imgState = true, logoName = "Hartan", userNavbarStyle, userNavToggleStyle, userNavHeaderStyle, userNavTitleStyle, userNavContentStyle, userNavButtonStyle }) {




    return (
        <div className={`${sidemenuStyle.navBar} ${userNavbarStyle}`}>
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
                            <div className={`${sidemenuStyle.navButton} ${userNavButtonStyle}`} key={id}>{imgState && <img src={imgSrc} alt="logo" />}
                                <span>{item.elem}</span>
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
        { elem: PropTypes.element }
    )),
    imgSrc: PropTypes.string,
    imgState: PropTypes.bool,
    logoName: PropTypes.string,
    userNavbarStyle: PropTypes.string,
    userNavToggleStyle: PropTypes.string,
    userNavHeaderStyle: PropTypes.string,
    userNavTitleStyle: PropTypes.string,
    userNavContentStyle: PropTypes.string,
    userNavButtonStyle: PropTypes.string
};