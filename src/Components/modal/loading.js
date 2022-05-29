import React from 'react';
import ReactLoading from 'react-loading';

export default function Loading({ type, color }) {

    let loading = <ReactLoading type={type} color={color} height={200} width={150} />
    
    return (
        <div className="loading">
            {loading}
            <p>در حال دریافت اطلاعات از سرور</p>
        </div>
    )
}
 
