import picture from "./../../images/blank-profile-picture-973460__480.webp"

export default function ShowUsersInGridMode({user}) {

    return (
        <div className="gridModeItem">
            <div className="gridModeItemText">
                <p>
                    <span className="title">نام و نام خانوادگی :</span>
                    <span className="value">{user.name}</span> 
                </p>
                <p>
                    <span className="title">کدملی :</span>
                    <span className="value">{user.IDCode}</span> 
                </p>
                <p>
                    <span className="title">ایمیل :</span>
                    <span className="value">{user.email}</span>   
                </p>
                <p>
                    <span className="title">تاریخ عضویت :</span>
                    <span className="value">{user.date}</span>  
                </p>
                <p>
                    <span className="title">نوع دسترسی :</span>
                    <span className="value"> {user.accessRate} </span>
                </p>
            </div>
            <div className="gridModeItemImage">
                <img src={picture} />
            </div>
        </div>
    )
}