import PropTypes from "prop-types";

const VersionTwoChanges = ({ values }) => (
    <div className="item">
        <h3> {values.aboutRouteAbilitiesV2_Header} </h3>
        <p>
            {values.aboutRouteAbilitiesV2_Paraghraph1}
        <br />
            {values.aboutRouteAbilitiesV2_Paraghraph2}
        </p>
        <ul>
            <li> {values.aboutRouteAbilitiesV2_li1} </li>
            <li> {values.aboutRouteAbilitiesV2_li2} </li>
            <li> {values.aboutRouteAbilitiesV2_li3} </li>
            <li> {values.aboutRouteAbilitiesV2_li4} </li>
        </ul>
    </div>
)

VersionTwoChanges.propTypes = {
    values: PropTypes.object
}

export default VersionTwoChanges;