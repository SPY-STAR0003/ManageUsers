// static files
import notFoundImage from "../asset/images/impact-404-error-in-seo.jpg";

export default function NotFound() {
    return (
        <div className={"notFound"}>
            <img src={notFoundImage} alt={" ======== Page Not Found ==========="} />
            <p> صفحه موردنظر شما یافت نشد </p>
        </div>
    )
}