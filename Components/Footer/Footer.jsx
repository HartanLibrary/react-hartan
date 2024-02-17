import footerStyles from "./Footer.module.css";
import PropTypes from "prop-types";


export const footerLinksArray = [
  {
    footerLinkHeading: "Follow Us",
    footerLinks: [
      {
        footerLinkName: "LinkedIn",
        footerLinksrc: "https://www.linkedin.com/company/precursor-info-solutions-private-limited/about/"
      },
      {
        footerLinkName: "Instagram",
        footerLinksrc: "https://www.instagram.com/precursor_info_solutions/"
      },
      {
        footerLinkName: "YouTube",
        footerLinksrc: "https://www.youtube.com/@precursorinfosolutions6405"
      },
      {
        footerLinkName: "FaceBook",
        footerLinksrc: ""
      }
    ]
  },
  {
    footerLinkHeading: "Support",
    footerLinks: [
      {
        footerLinkName: "S-62, Gole Market, Mahanagar, Lucknow",
        footerLinksrc: "https://maps.app.goo.gl/8nQx2s2RCMJ9yCRz8"
      },
      {
        footerLinkName: "precursorlko@gmail.com",
        footerLinksrc: "mailto:precursorlko@gmail.com"
      },
      {
        footerLinkName: "9415591794",
        footerLinksrc: "tel:9415591794"
      },
      {
        footerLinkName: "9984538899",
        footerLinksrc: "tel:998453889"
      }
    ]
  }
];

// const alllinks = [
//   {
//     name: "Insta",
//     link: "",
//   },
//   {
//     name: "Facebook",
//     link: "",
//   },
//   {
//     name: "YouTube",
//     link: "",
//   },
//   {
//     name: "Telegram",
//     link: "",
//   }
// ]



export default function Footer({ footerList = footerLinksArray }) {
  return (
    <footer id="" className="">
      <div className="container px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col md:pl-0">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center lg:justify-center">
          {footerList.map((footerLink, id) => {
            return (
              <div className="lg:w-1/4 md:w-1/2 w-full px-4" key={id}>
                <h2 className="title-font font-medium text-white tracking-widest mb-3">
                  {footerLink.footerLinkHeading}
                </h2>
                <div className="list-none mb-10 flex flex-col gap-4">
                  {footerLink.footerLinks.map((link, id) => {
                    return (
                      <li key={id}>
                        <a
                          className="text-gray-400 hover:text-white"
                        >
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
      </div>

      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-2 flex flex-wrap justify-center items-center flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            Copyright © 2024 Precursor Info Solutions — All rights reserved by
            <strong> Precursor Info Solutions Pvt. Ltd.</strong>
          </p>
        </div>
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
  }))

}