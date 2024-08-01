import footerStyles from "./Footer.module.css"
import PropTypes from "prop-types"


export const footerLinksArray = [
  {
    footerLinkHeading: "Follow Us",
    footerLinks: [
      {
        footerLinkName: "GitHub",
        footerLinkSrc: "https://github.com/akkshayTandon/react-hartan-js"
      },
      {
        footerLinkName: "LinkedIn",
        footerLinkSrc: ""
      },
      {
        footerLinkName: "Instagram",
        footerLinkSrc: ""
      },
      {
        footerLinkName: "YouTube",
        footerLinkSrc: ""
      }
    ]
  },
  {
    footerLinkHeading: "Support",
    footerLinks: [
      {
        footerLinkName: "Gomtinagar and Daliganj, Lucknow",
        footerLinkSrc: ""
      },
      {
        footerLinkName: "hartanlibrary@gmail.com",
        footerLinkSrc: "mailto:hartanlibrary@gmail.com"
      },
      {
        footerLinkName: "9999999999",
        footerLinkSrc: ""
      },
      {
        footerLinkName: "9999999999",
        footerLinkSrc: ""
      }
    ]
  }
];

export default function Footer({ footerList = footerLinksArray, copyrightYear = "2024", copyrightName = "Hartan Library", id, userFooterStyle, userLinksStyle, userFooterLinksStyle, userLinksDataStyle, userCopyrightStyle }) {

  return (
    <footer className={`${userFooterStyle}`} id={id}>

      <div className={`${footerStyles.links} ${userLinksStyle}`}>
        {footerList.map((footerLink, id) => {
          return (
            <div className={`${userFooterLinksStyle}`} key={id}>
              <h2>
                {footerLink.footerLinkHeading}
              </h2>
              <div className={`${footerStyles.linksdata} ${userLinksDataStyle}`}>
                {footerLink.footerLinks.map((link, id) => {
                  return (
                    <li key={id}>
                      <a href={link.footerLinkSrc}>
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
        <p>
          Copyright © {copyrightYear} {copyrightName} — All rights reserved by
          <strong> {copyrightName} </strong>
        </p>
      </div>

    </footer>
  );
}

Footer.propTypes = {
  footerList: PropTypes.arrayOf(PropTypes.shape({
    footerLinkHeading: PropTypes.node,
    footerLinks: PropTypes.arrayOf(PropTypes.shape({
      footerLinkName: PropTypes.node,
      footerLinksrc: PropTypes.string
    }))
  })),
  copyrightYear: PropTypes.string,
  copyrightName: PropTypes.string,
  id: PropTypes.string,
  userFooterStyle: PropTypes.string,
  userLinksStyle: PropTypes.string,
  userFooterLinksStyle: PropTypes.string,
  userLinksDataStyle: PropTypes.string,
  userCopyrightStyle: PropTypes.string
};