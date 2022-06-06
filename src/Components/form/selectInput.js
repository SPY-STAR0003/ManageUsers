export default function SelectInput({ mainLabel , labels , name , changer , width}) {

    return (
        <>
            <label style={{width}}>
                {mainLabel} 
                <select id={name} name={name}
                    onChange={e => changer(name , e.target.value)}
                    >
                    <option value="---">  ---  </option>
                    {
                        labels.map((item , index) => <option key={index} value={item}> {item} </option>)
                    }
                </select>
            </label>
        </>
    )
}