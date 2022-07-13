import PropTypes from "prop-types";


const ContactUs = ({values}) => (
    <div className="aboutProjectRouteItem">
        <h2> {values.aboutRouteContactUsHeader} </h2>
        <p>
            {values.aboutRouteContactParagraph}
        </p>
        <ul>
            <li> {values.aboutRouteContactUsli1} <a href="https://telegram.me/mz0003"> https://telegram.me/mz0003 </a></li>
            <li> {values.aboutRouteContactUsli2} <a href="https://github.com/SPY-STAR0003"> https://github.com/SPY-STAR0003 </a></li>
            <li> {values.aboutRouteContactUsli3} <a href="mailto:spystar0003@gmail.com"> spystar0003@gmail.com </a></li>
        </ul>
    </div>     
)


ContactUs.propTypes = {
    values: PropTypes.object
}

export default ContactUs;