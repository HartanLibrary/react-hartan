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

export default function Statistics({ statsBlockData = list, statisticsHeading = "Hartan", statisticsHeadingAbout = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium libero architecto ipsum nostrum impedit similique neque mollitia dolores quasi autem cum ea, quas aspernatur? Deserunt.", imgSrc = "https://dummyimage.com/500x250", imgState = true, imgAlt = "Hartan", id, imgLoad, userStatisticsStyle, userStatsContentStyle, userStatsBlocksStyle }) {

    return (
        <section className={`${statisticsStyle.statistics} ${userStatisticsStyle}`} id={id}>
            <div className={`${statisticsStyle.abtStats} ${userStatsContentStyle}`}>
                <div>
                    <h1>{statisticsHeading}</h1>
                    <p>{statisticsHeadingAbout}</p>
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

            {
                imgState &&
                <figure>
                    <img src={imgSrc} alt={imgAlt} loading={imgLoad}/>
                </figure>
            }

        </section>
    )
}

Statistics.propTypes = {
    statsBlockData: PropTypes.arrayOf(PropTypes.shape({
        head: PropTypes.node,
        data: PropTypes.node
    })),
    statisticsHeading: PropTypes.node,
    statisticsHeadingAbout: PropTypes.node,
    imgSrc: PropTypes.string,
    imgState: PropTypes.bool,
    imgAlt: PropTypes.string,
    id: PropTypes.string,
    userStatisticsStyle: PropTypes.string,
    userStatsContentStyle: PropTypes.string,
    userStatsBlocksStyle: PropTypes.string
};