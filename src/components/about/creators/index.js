import PropTypes from "prop-types";

const Creators = ({values}) => (
    <div className="aboutProjectRouteItem">
        <h2> {values.aboutRouteMakersHeader}  </h2>
        <p>
            {values.aboutRouteMakersParagraph1}
            <br />
            {values.aboutRouteMakersParagraph2}
            <br />
            {values.aboutRouteMakersParagraph3}
        </p>
    </div>
)

Creators.propTypes = {
    values: PropTypes.object
}

export default Creators;