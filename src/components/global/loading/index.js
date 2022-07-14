// react
import React from 'react';
import PropTypes from "prop-types";

// libraries
import ReactLoading from 'react-loading';

// redux
import { useSelector } from 'react-redux';

const Loading = ({ type, color }) => {

    let loading = <ReactLoading type={type} color={color} height={200} width={150} />
    const values = useSelector(state => state.language.values);

    return (
        <div className="loading">
            {loading}
            <p> {values.loadingParagraph} </p>
        </div>
    )
}

Loading.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
}

export default Loading;
