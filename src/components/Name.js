import React from 'react';

function Name(props) {
    return(
        <button onClick={props.clicked} className="btn btn-primary" style={{margin:'10px'}}>Name</button>
    )
    
}

export default Name;
