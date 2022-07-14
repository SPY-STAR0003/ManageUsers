import PropTypes from 'prop-types';

const TextareaInput = ({label , status , changer , name , value}) => {
    return (
        <label>
            {label}
            <textarea placeholder={status} onChange={e => changer(name , e.target.value)} defaultValue={value}>
            </textarea>
        </label>
    )
}

TextareaInput.propTypes = {
    value : PropTypes.string || PropTypes.number ,
    label : PropTypes.string || PropTypes.number,
    name : PropTypes.string,
    changer : PropTypes.func,
    status : PropTypes.string,
}

export default TextareaInput;