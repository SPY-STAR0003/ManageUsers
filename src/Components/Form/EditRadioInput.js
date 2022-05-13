export default function EditRadioInput({ label1 , label2 , name , onchangeFunction, userEdit}) {
    return (
        <>
            <td className="edit-radio-inputs">
                <label className="accessRate">
                    {label1}
                    <input type="radio" name={name} onChange={(e) => onchangeFunction("accessRate" , e.target.dataset.rate)} data-name={`${name}-1`} data-rate={label1} checked={userEdit.accessRate === label1}/>
                    <span className="checkmark"></span>
                </label>
                <label className={name}>
                    {label2}
                    <input type="radio" name={name} onChange={(e) => onchangeFunction("accessRate" , e.target.dataset.rate)} data-name={`${name}-2`} data-rate={label2} checked={userEdit.accessRate === label2}/>
                    <span className="checkmark"></span>
                </label>
            </td>
        </>
    )
}