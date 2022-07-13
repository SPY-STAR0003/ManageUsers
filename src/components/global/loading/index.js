// react
import React from 'react';

// libraries
import ReactLoading from 'react-loading';

// redux
import { useSelector } from 'react-redux';

export default function Loading({ type, color }) {

    let loading = <ReactLoading type={type} color={color} height={200} width={150} />
    const values = useSelector(state => state.language.values);

    return (
        <div className="loading">
            {loading}
            <p> {values.loadingParagraph} </p>
        </div>
    )
}
 
