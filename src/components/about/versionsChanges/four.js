import PropTypes from "prop-types";

const VersionFourChanges = ({ values }) => (
    <div className="item">
        <h3> {values.aboutRouteAbilitiesV4_Header} </h3>
        <p>
            {values.aboutRouteAbilitiesV4_Paraghraph}
        </p>
        <ul>
            <li> {values.aboutRouteAbilitiesV4_li1} </li>
            <li> {values.aboutRouteAbilitiesV4_li2} </li>
            <li> {values.aboutRouteAbilitiesV4_li3} </li>
            <li> {values.aboutRouteAbilitiesV4_li4} </li>
            <li> {values.aboutRouteAbilitiesV4_li5} </li>
            <li> {values.aboutRouteAbilitiesV4_li6} </li>
            <li> {values.aboutRouteAbilitiesV4_li7} </li>
            <li> {values.aboutRouteAbilitiesV4_li8} </li>
        </ul>
    </div>
)

VersionFourChanges.propTypes = {
    values: PropTypes.object
}

export default VersionFourChanges;