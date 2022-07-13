export default function TextareaInput({label , status , changer , name , value}) {
    return (
        <label>
            {label}
            <textarea placeholder={status} onChange={e => changer(name , e.target.value)} defaultValue={value}>
            </textarea>
        </label>
    )
}