export default function RadioInputForm({ mainLabel , label1 , label2 , label3 , label4 , name , onchangeFunction}) {

    const eventHandler = e => console.log(e.target.value)

    return (
        <>
            <label> {mainLabel} </label>
            <select id={name} name={name}
                onChange={e => onchangeFunction(name , e.target.value)}
                >
                <option value="مشخص نشده است">مشخص نشده است</option>
                <option value={label1}> {label1} </option>
                <option value={label2}> {label2} </option>
                <option value={label3}> {label3} </option>
                <option value={label4}> {label4} </option>
            </select>
        </>
    )
}