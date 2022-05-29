import picHelp1 from "./../images/help1.png";
import picHelp2 from "./../images/help2.png";
import picHelp3 from "./../images/help3.png";
import picHelp4 from "./../images/help4.png";
import picHelp5 from "./../images/help5.png";
import picHelp6 from "./../images/help6.png";
import picHelp7 from "./../images/help7.png";

export default function Help() {
    return (
        <div className="helpRoute">
            <h2> مستندات پروژه </h2>
            <div className="helpRouteItem">
                <h3> نصب پروژه </h3>
                <p>
                    برای نصب پروژه بر روی سیستم خود تنها کافیست عبارت زیر را داخل ترمینال ویندوز خود وارد کنید :   
                </p>
                <code>
                    $ git clone https://github.com/SPY-STAR0003/ManageUsers.git ManageUsers
                </code>
                <p>
                    برای ویرایش و شخصی سازی پروژه نیز پس از ورود به مسیر پروژه، با وارد کردن عبارت زیر پکیج های مورد نیاز پروژه را نصب کنید و شروع به شخصی سازی پروژه نمایید !   
                </p>
                <code>
                    $ npm i
                </code>
            </div>
            <div className="helpRouteItem">
                <h3> اضافه کردن یک کاربر جدید  </h3>
                <p>
                    برای اضافه کردن یک کاربر جدید، کافی است روی آیکون پایین سمت چپ صفحه کلیک کنید :   
                </p>
                <img src={picHelp1} alt="راهنمای اضافه کردن یک عضو جدید" />
                <img src={picHelp2} alt="راهنمای اضافه کردن یک عضو جدید" />
            </div>
            <div className="helpRouteItem">
                <h3> ویرایش یک کاربر </h3>
                <p>
                    برای ویرایش کردن کاربر کافیست روی آیکون مداد جلوی مشخصات او کلیک کنید:
                </p>
                <img src={picHelp3} alt="راهنمای ویرایش کردن یک کاربر" />
                <p>
                    با کلیک روی آیکون مداد حالت فرم تغییر می کند حال می توانید اطلاعات را ویرایش کنید. پس از ویرایش روی آیکون تیک کلیک کنید.
                </p>
                <img src={picHelp4} alt="راهنمای ویرایش کردن یک کاربر" />
            </div>
            <div className="helpRouteItem">
                <h3> حذف یک کاربر </h3>
                <p>
                    برای حذف یک کاربر تنها کافیست روی آیکون سطل زباله جلوی مشخصات او کلیک کنید.
                </p>
                <img src={picHelp5} alt="راهنمای حذف کردن یک کاربر" />
            </div>
            <div className="helpRouteItem">
                <h3> مشاهده اطلاعات یک کاربر </h3>
                <p>
                    برای مشاهده کامل اطلاعات یک کاربر کافیست روی اسم یا مشخصات او کلیک کنید تا مشخصات کامل او به شما نمایش داده شود.
                </p>
                <img src={picHelp7} alt="راهنمای مشاهده کامل اطلاعات یک کاربر" />
                <img src={picHelp6} alt="راهنمای مشاهده کامل اطلاعات یک کاربر" />
            </div>
            <div className="helpRouteItem">
                <p> مکانی برای مستندات شما ... </p>
            </div>
        </div>
    )
}