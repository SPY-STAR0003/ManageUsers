import PropTypes from "prop-types";

const VersionOneChanges = ({ values }) => (
    <div className="item">
        <h3> {values.aboutRouteAbilitiesV1_Header} </h3>
        <p>
        {values.aboutRouteAbilitiesV1_Paraghraph} 
        </p>
        <ul>
            <li> {values.aboutRouteAbilitiesV1_li1} </li>
            <li> {values.aboutRouteAbilitiesV1_li2} </li>
            <li> {values.aboutRouteAbilitiesV1_li3} </li>
            <li> {values.aboutRouteAbilitiesV1_li4} </li>
        </ul>
    </div>
)

VersionOneChanges.propTypes = {
    values: PropTypes.object
}

export default VersionOneChanges;