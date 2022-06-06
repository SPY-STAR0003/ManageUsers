

export default function TextareaInput({label , status}) {

    return (
        <label>
            {label}
            <textarea placeholder={status}>
                
            </textarea>
        </label>
    )
}