import footerStyles from "./Footer.module.css"
import PropTypes from "prop-types"


export const footerLinksArray = [
  {
    footerLinkHeading: "Follow Us",
    footerLinks: [
      {
        footerLinkName: "GitHub",
        footerLinksrc: "https://github.com/akkshayTandon/react-hartan-js"
      },
      {
        footerLinkName: "LinkedIn",
        footerLinksrc: ""
      },
      {
        footerLinkName: "Instagram",
        footerLinksrc: ""
      },
      {
        footerLinkName: "YouTube",
        footerLinksrc: ""
      }
    ]
  },
  {
    footerLinkHeading: "Support",
    footerLinks: [
      {
        footerLinkName: "Gomtinagar and Daliganj, Lucknow",
        footerLinksrc: ""
      },
      {
        footerLinkName: "hartanlibrary@gmail.com",
        footerLinksrc: "mailto:hartanlibrary@gmail.com"
      },
      {
        footerLinkName: "9999999999",
        footerLinksrc: ""
      },
      {
        footerLinkName: "9999999999",
        footerLinksrc: ""
      }
    ]
  }
];

export default function Footer({ footerList = footerLinksArray, copyrightYear = "2024", copyrightName = "Hartan Library", userFooterStyle, userLinksStyle, userFooterLinksStyle, userCopyrightStyle }) {

  return (
    <footer id="" className={`${userFooterStyle}`}>

      <div className={`${footerStyles.links} ${userLinksStyle}`}>
        {footerList.map((footerLink, id) => {
          return (
            <div className={`${userFooterLinksStyle}`} key={id}>
              <h2 className={``}>
                {footerLink.footerLinkHeading}
              </h2>
              <div className={`${footerStyles.linksdata}`}>
                {footerLink.footerLinks.map((link, id) => {
                  return (
                    <li key={id}>
                      <a className={``} href={link.footerLinksrc}>
                        {link.footerLinkName}
                      </a>
                    </li>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className={`${footerStyles.copyright} ${userCopyrightStyle}`}>
        <p className={``}>
          Copyright © {copyrightYear} {copyrightName} — All rights reserved by
          <strong> {copyrightName} </strong>
        </p>
      </div>


    </footer>
  );
}

Footer.propTypes = {
  footerList: PropTypes.arrayOf(PropTypes.shape({
    footerLinkHeading: PropTypes.string,
    footerLinks: PropTypes.arrayOf(PropTypes.shape({
      footerLinkName: PropTypes.string,
      footerLinksrc: PropTypes.string
    }))
  })),
  copyrightYear: PropTypes.string,
  copyrightName: PropTypes.string,
  userFooterStyle: PropTypes.string,
  userLinksStyle: PropTypes.string,
  userFooterLinksStyle: PropTypes.string,
  userCopyrightStyle: PropTypes.string
};