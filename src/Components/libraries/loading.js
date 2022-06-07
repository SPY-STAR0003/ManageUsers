import React from 'react';
import ReactLoading from 'react-loading';
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
 
