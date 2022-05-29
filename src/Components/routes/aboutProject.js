export default function aboutProject() {

    return (
        <div className="aboutProjectRoute">
            <h1> درباره پروژه </h1>
            <div className="aboutProjectRouteItem">
                <h2> سازندگان  </h2>
                <p>
                    ایده اولیه این پروژه از حسام موسوی،  مدیر وبسایت راکت، بوده است.
                    <br />
                    طراحی UI و UX این پروژه، به همراه کدنویسی آن توسط محمد زورمند انجام گردیده است. ایده های دوستان در کمپ ریکت راکت، من جمله آقای رضاپاسالار نیز در بهبود هر چه بیشتر این پروژه نقش بسزایی داشته است.
                    <br />
                    هم چنین این پروژه همیشه یک پروژه منبع باز است و از تغییرات درخواستی شما به شدت استقبال می کند.
                </p>
            </div>
            <div className="aboutProjectRouteItem">
                <h2> قابلیت های این پروژه </h2>
                <div className="item">
                    <h3> نسخه 3.0 </h3>
                    <p>
                    نسخه 3.0 یک نسخه، با تغییرات نسبتاً گسترده می باشد که شرح آن به صورت زیر است :
                    </p>
                    <ul>
                        <li> تغییرات در رنگ بندی UI پروژه </li>
                        <li> اضافه شدن مستندات به پروژه </li>
                        <li> اضافه شدن قسمتی در مورد پروژه، به پروژه </li>
                        <li> اضافه شدن route ها به پروژه برای قابل فهم تر کردن پروژه </li>
                        <li> اضافه شدن یک loading به پروژه برای زمانیکه اطلاعات در حال لود شدن از سمت سرور هستند. </li>
                    </ul>
                </div>
                <div className="item">
                    <h3> نسخه 2.0 </h3>
                    <p>
                        در نسخه 2.0 تغییرات صورت گرفته تماماً در سمت کدنویسی بوده و توسط کاربری که تنها از برنامه استفاده می کند قابل مشاهده نمی باشد. 
                    <br />
                        تغییرات صورت گرفته در نسخه 2.0 به شرح زیر است :
                    </p>
                    <ul>
                        <li> اضافه شدن context و  Reducer برای مدیریت بهتر state ها </li>
                        <li> ذخیره شدن اطلاعات در یک api به کمک سایت endapi ساخت شده توسط گروه راکت </li>
                        <li> خلاصه سازی و کم کردن حجم کدها </li>
                        <li> رفع باگ ها </li>
                    </ul>
                </div>
                <div className="item">
                    <h3> نسخه 1.0 </h3>
                    <p>
                        نسخه 1.0 یا همان نسخه اولیه پروژه می تواند موارد زیر را انجام دهد :
                    </p>
                    <ul>
                        <li> اطلاعات را از کاربر بگیرد. </li>
                        <li> اطلاعات را داخل یک جدول به کاربر نمایش دهد! </li>
                        <li> به کاربر این توانایی را می دهد که اطلاعات قبلی را حذف یا ویرایش کند. </li>
                        <li> اطلاعات کاربر را در لوکال استوریج مرورگر ذخیره می کند تا در دفعات بعدی در دسترس باشد. </li>
                    </ul>
                </div>
                <div className="aboutProjectRouteItem">
                <h2> ارتباط با ما  </h2>
                <p>
                    چنانچه پیشنهاد، ایده یا انتقادی در مورد این پروژه دارید می توانید از طریق راههای زیر با ما تماس برقرار کنید :
                </p>
                <ul>
                        <li> تلگرام : <a href="https://telegram.me/mz0003"> https://telegram.me/mz0003 </a></li>
                        <li> گیت هاب : <a href="https://github.com/SPY-STAR0003"> https://github.com/SPY-STAR0003 </a></li>
                        <li> ایمیل : <a href="mailto:spystar0003@gmail.com"> spystar0003@gmail.com </a></li>
                    </ul>
            </div>
            </div>            
        </div>
    )
}