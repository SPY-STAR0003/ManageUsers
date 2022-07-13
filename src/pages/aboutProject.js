// Redux
import { useSelector } from "react-redux";

// components
import VersionFourChanges from "../components/about/versionsChanges/four";
import VersionThreeChanges from "../components/about/versionsChanges/three";
import VersionTwoChanges from "../components/about/versionsChanges/two";
import VersionOneChanges from "../components/about/versionsChanges/one";
import ContactUs from "../components/about/contactUs";
import Creators from "../components/about/creators";

export default function AboutProject() {
// Redux Functions
    const values = useSelector(state => state.language.values);

    return (
        <div className="aboutProjectRoute">
            <h1> {values.aboutRouteMainHeader} </h1>
            <Creators values={values} />
            <div className="aboutProjectRouteItem">
                <h2> {values.aboutRouteAbilitiesHeader} </h2>
                <VersionFourChanges values={values} />
                <VersionThreeChanges values={values} />
                <VersionTwoChanges values={values} />
                <VersionOneChanges values={values} />
            </div>
            <ContactUs values={values} />
        </div>
    )
}