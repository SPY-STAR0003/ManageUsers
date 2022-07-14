import PropTypes from "prop-types";

const SelectInput = ({ mainLabel , labels , name , changer , width}) => {

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

SelectInput.propTypes = {
    labels : PropTypes.array,
    mainLabel : PropTypes.string || PropTypes.number,
    name : PropTypes.string,
    changer : PropTypes.func,
    width : PropTypes.string,
}

export default SelectInput;