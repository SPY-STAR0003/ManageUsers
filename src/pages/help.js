// Redux
import { useSelector } from "react-redux";

// static files
import picHelp1 from "../asset/images/help1.png";
import picHelp2 from "../asset/images/help2.png";
import picHelp3 from "../asset/images/help3.png";
import picHelp4 from "../asset/images/help4.png";
import picHelp5 from "../asset/images/help5.png";
import picHelp6 from "../asset/images/help6.png";
import picHelp7 from "../asset/images/help7.png";

export default function Help() {
// Redux Functions
    const values = useSelector(state => state.language.values)

    return (
        <div className="helpRoute">
            <h2> {values.helpRouteMainHeader} </h2>
            <div className="helpRouteItem">
                <h3> {values.helpRouteInstallHeader} </h3>
                <p>
                    {values.helpRouteInstallParagraph1}  
                </p>
                <code>
                    $ git clone https://github.com/SPY-STAR0003/ManageUsers.git ManageUsers
                </code>
                <p>
                    {values.helpRouteInstallParagraph2}   
                </p>
                <code>
                    $ npm i
                </code>
            </div>
            <div className="helpRouteItem">
                <h3> {values.helpRouteAddUserHeader}  </h3>
                <p>
                    {values.helpRouteAddUserParagraph}   
                </p>
                <img src={picHelp1} alt="راهنمای اضافه کردن یک عضو جدید" />
                <img src={picHelp2} alt="راهنمای اضافه کردن یک عضو جدید" />
            </div>
            <div className="helpRouteItem">
                <h3> {values.helpRouteEditUserHeader} </h3>
                <p>
                    {values.helpRouteEditUserParagraph1}
                </p>
                <img src={picHelp3} alt="راهنمای ویرایش کردن یک کاربر" />
                <p>
                    {values.helpRouteEditUserParagraph2}
                </p>
                <img src={picHelp4} alt="راهنمای ویرایش کردن یک کاربر" />
            </div>
            <div className="helpRouteItem">
                <h3> {values.helpRouteDeleteUserHeader} </h3>
                <p>
                    {values.helpRouteDeleteUserParahraph}
                </p>
                <img src={picHelp5} alt="راهنمای حذف کردن یک کاربر" />
            </div>
            <div className="helpRouteItem">
                <h3> {values.helpRouteShowUserHeader} </h3>
                <p>
                    {values.helpRouteShowUserParagraph}
                </p>
                <img src={picHelp7} alt="راهنمای مشاهده کامل اطلاعات یک کاربر" />
                <img src={picHelp6} alt="راهنمای مشاهده کامل اطلاعات یک کاربر" />
            </div>
            <div className="helpRouteItem">
                <p> {values.helpRouteEndParagraph} </p>
            </div>
        </div>
    )
}