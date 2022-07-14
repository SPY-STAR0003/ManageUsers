import PropTypes from 'prop-types';

const InputForm = ({ 
    specialClass, 
    label, 
    type, 
    value, 
    changer, 
    name, 
    pHolder, 
    width}) => {
                    return (
                        <label 
                            className={specialClass} 
                            style={{width}} 
                            htmlFor={name}
                        >
                            {label}
                            <input 
                                name={name} 
                                type={type} 
                                value={value} 
                                onChange={changer} 
                                data-name={name} 
                                placeholder={pHolder} 
                            />
                        </label>
                    )
}

InputForm.propTypes = {
    specialClass : PropTypes.string,
    label : PropTypes.string || PropTypes.number,
    type : PropTypes.string,
    value : PropTypes.string || PropTypes.number,
    changer : PropTypes.func,
    name : PropTypes.string,
    pHolder : PropTypes.string,
    width : PropTypes.string,
}


export default InputForm;