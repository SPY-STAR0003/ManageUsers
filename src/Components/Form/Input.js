function Input({ label , type , value , onchangeFunction , name , pHolder}) {

    return (
        <>
            <label htmlFor={name}>{label}
                <input name={name} type={type} value={value} onChange={onchangeFunction} data-name={name} placeholder={pHolder} />
            </label>
        </>
    )
}

export default Input;