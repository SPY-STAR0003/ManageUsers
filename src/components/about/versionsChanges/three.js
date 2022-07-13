import PropTypes from "prop-types";

const VersionThreeChanges = ({ values }) => (
    <div className="item">
        <h3> {values.aboutRouteAbilitiesV3_Header} </h3>
        <p>
            {values.aboutRouteAbilitiesV3_Paraghraph}
        </p>
        <ul>
            <li> {values.aboutRouteAbilitiesV3_li1} </li>
            <li> {values.aboutRouteAbilitiesV3_li2} </li>
            <li> {values.aboutRouteAbilitiesV3_li3} </li>
            <li> {values.aboutRouteAbilitiesV3_li4} </li>
            <li> {values.aboutRouteAbilitiesV3_li5} </li>
        </ul>
    </div>
)

VersionThreeChanges.propTypes = {
    values: PropTypes.object
}

export default VersionThreeChanges;