export default function InputForm({ specialClass , label , type , value , changer , name , pHolder , width}) {
    return (
        <label className={specialClass} style={{width}} htmlFor={name}>{label}
            <input name={name} type={type} value={value} onChange={changer} data-name={name} placeholder={pHolder} />
        </label>
    )
}