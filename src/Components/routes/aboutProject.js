import { useSelector } from "react-redux";

export default function AboutProject() {

    const values = useSelector(state => state.language.values);

    return (
        <div className="aboutProjectRoute">
            <h1> {values.aboutRouteMainHeader} </h1>
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
            <div className="aboutProjectRouteItem">
                <h2> {values.aboutRouteAbilitiesHeader} </h2>
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
            </div>            
        </div>
    )
}