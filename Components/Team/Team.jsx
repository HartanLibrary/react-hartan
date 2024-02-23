import teamStyle from "./Team.module.css"
import PropTypes from "prop-types"

const list = [
    {
        memberImg: "https://dummyimage.com/75x75",
        memberName: "Hartan",
        memberPosition: "UI/UX Designer"
    },
    {
        memberImg: "https://dummyimage.com/75x75",
        memberName: "Hartan",
        memberPosition: "UI/UX Designer"
    },
    {
        memberImg: "https://dummyimage.com/75x75",
        memberName: "Hartan",
        memberPosition: "UI/UX Designer"
    },
    {
        memberImg: "https://dummyimage.com/75x75",
        memberName: "Hartan",
        memberPosition: "UI/UX Designer"
    },
    {
        memberImg: "https://dummyimage.com/75x75",
        memberName: "Hartan",
        memberPosition: "UI/UX Designer"
    },
    {
        memberImg: "https://dummyimage.com/75x75",
        memberName: "Hartan",
        memberPosition: "UI/UX Designer"
    },
    {
        memberImg: "https://dummyimage.com/75x75",
        memberName: "Hartan",
        memberPosition: "UI/UX Designer"
    },
    {
        memberImg: "https://dummyimage.com/75x75",
        memberName: "Hartan",
        memberPosition: "UI/UX Designer"
    },
    {
        memberImg: "https://dummyimage.com/75x75",
        memberName: "Hartan",
        memberPosition: "UI/UX Designer"
    },
    {
        memberImg: "https://dummyimage.com/75x75",
        memberName: "Hartan",
        memberPosition: "UI/UX Designer"
    },
    {
        memberImg: "https://dummyimage.com/75x75",
        memberName: "Hartan",
        memberPosition: "UI/UX Designer"
    },
    {
        memberImg: "https://dummyimage.com/75x75",
        memberName: "Hartan",
        memberPosition: "UI/UX Designer"
    }
];

export default function Team({ memberList = list, teamSectionHeading = "Our Team", teamSectionContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta molestias, ad delectus qui corrupti aliquid minus a quo ipsa cumque aspernatur, veritatis dolorum ipsam!", userTeamStyle, userTeamDetailsCaptionStyle, userTeamMembersStyle, userTeamMemberCardStyle, userTeamMemberNameStyle, userTeamMemberPositionStyle }) {

    return (
        <section className={`${teamStyle.team} ${userTeamStyle}`}>
            <div className={`${teamStyle.teamDetailsCaption} ${userTeamDetailsCaptionStyle}`}>
                <h1>{teamSectionHeading}</h1>
                <p>{teamSectionContent}</p>
            </div>

            <div className={`${teamStyle.teamMembers} ${userTeamMembersStyle}`}>
                {
                    memberList.map((member, id) => {
                        return (
                            <div key={id} className={`${teamStyle.teamMemberCard} ${userTeamMemberCardStyle}`}>
                                <figure>
                                    <img src={member.memberImg} alt={member.memberName} />
                                </figure>
                                <div>
                                    <p className={`${teamStyle.teamMemberName} ${userTeamMemberNameStyle}`}>{member.memberName}</p>
                                    <p className={`${teamStyle.teamMemberPosition}  ${userTeamMemberPositionStyle}`}>{member.memberPosition}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

Team.propTypes = {
    memberList: PropTypes.arrayOf(PropTypes.shape({
        memberImg: PropTypes.string,
        memberName: PropTypes.string,
        memberPosition: PropTypes.string
    })),
    teamSectionHeading: PropTypes.string,
    teamSectionContent: PropTypes.string,
    userTeamStyle: PropTypes.string,
    userTeamDetailsCaptionStyle: PropTypes.string,
    userTeamMembersStyle: PropTypes.string,
    userTeamMemberCardStyle: PropTypes.string,
    userTeamMemberNameStyle: PropTypes.string,
    userTeamMemberPositionStyle: PropTypes.string
};