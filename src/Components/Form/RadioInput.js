export default function RadioInput({ mainLabel , label1 , label2 , name , onchangeFunction}) {
    return (
        <>
            <label> {mainLabel} </label>
            <div className="radio-inputs">
                <label className="accessRate">
                    {label1}
                    <input type="radio" name={name} onChange={(e) => onchangeFunction("accessRate" , e.target.dataset.rate)} data-name={`${name}-1`} data-rate={label1}/>
                    <span className="checkmark"></span>
                </label>
                <label className={name}>
                    {label2}
                    <input type="radio" name={name} onChange={(e) => onchangeFunction("accessRate" , e.target.dataset.rate)} data-name={`${name}-2`} data-rate={label2}/>
                    <span className="checkmark"></span>
                </label>
            </div>
        </>
    )
}