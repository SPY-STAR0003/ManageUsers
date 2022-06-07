export default function SelectInput({ mainLabel , labels , name , changer , width}) {

    return (
        <>
            <label style={{width}}>
                {mainLabel} 
                <select id={name} name={name}
                    onChange={e => changer(name , e.target.value)}
                    >
                        {/* this oprion is for all selects tag */}
                    <option value="---">  ---  </option>
                        {
                        /* 
                        but for other options we use map 
                        !ALERT! => labels are in a array then we can use map
                        */}
                    {
                        labels.map((item , index) => <option key={index} value={item}> {item} </option>)
                    }
                </select>
            </label>
        </>
    )
}