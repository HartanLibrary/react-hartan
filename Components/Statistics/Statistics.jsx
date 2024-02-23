import statisticsStyle from "./Statistics.module.css"
import PropTypes from "prop-types"

const list = [
    {
        head: "Users",
        data: "2.7K"
    },
    {
        head: "Subscribers",
        data: "2.1K"
    },
    {
        head: "Downloads",
        data: "45+"
    },
    {
        head: "Products",
        data: "5+"
    },
];

export default function Statistics({ statsBlockData = list, statisticsHeading = "Hartan", statisticsHeadingAbt = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium libero architecto ipsum nostrum impedit similique neque mollitia dolores quasi autem cum ea, quas aspernatur? Deserunt.", imgSrc = "https://dummyimage.com/500x250", userStatisticsStyle, userAbtStatsStyle, userStatsBlocksStyle }) {

    return (
        <section className={`${statisticsStyle.statistics} ${userStatisticsStyle}`}>
            <div className={`${statisticsStyle.abtStats} ${userAbtStatsStyle}`}>
                <div>
                    <h1>{statisticsHeading}</h1>
                    <p>{statisticsHeadingAbt}</p>
                </div>
                <div className={`${statisticsStyle.statsBlocks} ${userStatsBlocksStyle}`}>
                    {
                        statsBlockData.map((item, id) => {
                            return (
                                <div key={id}>
                                    <h2>{item.data}</h2>
                                    <p>{item.head}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <figure>
                <img src={imgSrc} alt="Hartan" />
            </figure>

        </section>
    )
}

Statistics.propTypes = {
    statsBlockData: PropTypes.arrayOf(PropTypes.shape({
        head: PropTypes.string,
        data: PropTypes.string
    })),
    statisticsHeading: PropTypes.string,
    statisticsHeadingAbt: PropTypes.string,
    imgSrc: PropTypes.string,
    userStatisticsStyle: PropTypes.string,
    userAbtStatsStyle: PropTypes.string,
    userStatsBlocksStyle: PropTypes.string
};